---
name: ppt-auto-builder
description: >
  PPT全流程自动编排器 — 从需求收集到PPTX交付的完整流水线。
  主agent编排，3个子agent执行（slides构建/image生图/质量审查），三轮审查闭环确保质量。
  Use this skill when user asks to: 制作PPT、做演示文稿、做slides、生成课件、汇报材料、
  论文答辩、研究汇报、学术报告、企业汇报、教学课件、路演材料、"帮我做一个关于XX的PPT"。
  Also trigger on: make PPT, create presentation, generate slides, PowerPoint, deck, slide deck,
  keynote, pitch deck, academic presentation, thesis defense slides.
  Do NOT trigger for: editing existing PPT/PPTX files, converting formats, extracting text from slides.
---

# PPT 自动制作 —— 编排器

> **主 agent 只做两件事：① 写 PLAN.md ② 调度子 agent。**
>
> **路径约定**：prompt 模板中的 `<WORKSPACE>` 是占位符，主 agent 在传递 prompt 给子 agent 前必须替换为当前工作目录的绝对路径。技能目录使用 `$HOME/.claude/skills/` 固定路径。

## 流程

```
阶段零~三：主 agent（依赖检查 → 需求 → 知识 → PLAN.md）
     ↓
阶段四：Agent("构建HTML slides") ← 加载 references/prompts/slides-build.md
     ↓
阶段五：Agent("排版审查") ← 加载 references/prompts/review-check.md#第一轮
  ├── NEEDS FIX → Agent("修复HTML") → Agent("排版复审")（≤2轮）
  └── ALL PASS ↓
阶段六：Agent("生成配图") ← 加载 references/prompts/image-generate.md#首次
     ↓
阶段七：Agent("图文审查") ← 加载 references/prompts/review-check.md#第二轮
  ├── NEEDS REGEN → Agent("重新生图") → Agent("图文复审")（≤2轮）
  └── ALL PASS ↓
阶段八：Agent("编译PPTX") ← 加载 references/prompts/slides-build.md#编译
     ↓
阶段九：Agent("最终抽检") ← 加载 references/prompts/review-check.md#第三轮
  ├── FAIL → 回退修复 → 重新编译
  └── PASS → 交付
```

---

## 阶段零：依赖检查

技能目录固定在 `~/.claude/skills/`，无需 Glob 搜索。直接用绝对路径：

```bash
# 技能目录（固定位置）
SKILL_DIR="$HOME/.claude/skills/ppt-auto-builder"
HS_DIR="$HOME/.claude/skills/huashu-slides"
GI_DIR="$HOME/.claude/skills/gpt-image-2"
WA_DIR="$HOME/.claude/skills/web-access"

# 运行依赖检查（检查 pptxgenjs, playwright, sharp, huashu-slides, gpt-image-2）
node "$SKILL_DIR/scripts/check-deps.js"
```

如果依赖检查失败，报告缺失项并引导用户安装。

---

## 阶段一：需求收集

**READ** `references/question-guide.md` — 提问模板和场景推断规则。
**READ** `references/style-guide.md` — 风格推荐表（Q3需要推荐3个风格时加载）。
**Do NOT Load** `plan-spec.md`, `review-guide.md`, `prompts/*`（此阶段不需要）。

用 `AskUserQuestion` 一次问完 Q1~Q5（主题/页数/风格/受众/模式）。用户消息已包含的信息跳过。

---

## 阶段二：知识收集

**前置步骤**：创建工作目录 `mkdir -p ppt_workspace/slides ppt_workspace/garden-gpt-image-2/image`

**READ** `references/cdp-search-patterns.md` — 仅当需要搜索时加载（CDP命令和DOM选择器）。
**Do NOT Load** `plan-spec.md`, `style-guide.md`, `prompts/*`（此阶段不需要）。

```
有完整材料？→ Read → 跳过
"直接做"？  → 跳过
只有主题？  → 搜索（CDP优先，WebSearch兜底）
```

CDP 可用性检测：`curl -s http://localhost:3456/health 2>/dev/null || echo "CDP unavailable"` → 不可用时直接用 WebSearch + WebFetch。

结果写入 `ppt_workspace/research_notes.md`。门控：PLAN.md 中规划的每一页幻灯片，research_notes.md 必须包含至少 3 个有来源支撑的数据点/论断。最多 2 轮搜索。

---

## 阶段三：撰写 PLAN.md

**READ** `references/plan-spec.md` — PLAN.md格式规范和字段约束（必读）。
**READ** `references/example-plan.md` — 完整输出示例。
**Do NOT Load** `prompts/*`, `review-guide.md`, `pptx-build-guide.md`（此阶段不需要）。

然后 `Write` 写入 `ppt_workspace/PLAN.md`。

PLAN.md 必须包含：元数据、风格参数速查、逐页规划、配图清单、技术规范。

---

## 阶段四~九：子 agent 调度

每个阶段唤醒子 agent 时，**READ 对应的 prompt 模板文件**（见下表），填入当前上下文（修复页面列表、失败图片列表等），传给 `Agent()`。
**Do NOT Load** 不属于当前阶段的 prompt 模板。

| 阶段 | 需要加载 | 不需要加载 |
|------|---------|-----------|
| 四：构建HTML | `prompts/slides-build.md` | image-generate, review-check |
| 五：排版审查 | `prompts/review-check.md` + `review-guide.md` | slides-build, image-generate |
| 六：生成配图 | `prompts/image-generate.md` + `image-generation-guide.md` | review-check, slides-build |
| 七：图文审查 | `prompts/review-check.md` + `review-guide.md` | slides-build, image-generate |
| 八：编译PPTX | `prompts/slides-build.md` + `pptx-build-guide.md` | image-generate, review-check |
| 九：最终抽检 | `prompts/review-check.md` | 所有其他 |

### Prompt 模板文件

| 文件 | 包含的 prompt |
|------|-------------|
| `references/prompts/slides-build.md` | 构建 HTML / 修复 HTML / 编译 PPTX |
| `references/prompts/image-generate.md` | 首次生图 / 重新生图 |
| `references/prompts/review-check.md` | 排版审查 / 图文审查 / 最终抽检 |

### 子 agent 失败处理

子 agent 可能返回无意义内容、偏离任务、或部分失败。按以下决策处理：

```
子 agent 返回结果
├── 完全无输出/超时？
│   → 重试一次（换种措辞重写 prompt）
│   → 仍失败 → 降级（告知用户，手动继续）
├── 输出偏离任务（如 slides-agent 聊天而非构建）？
│   → 更明确的 prompt（强调"只执行操作，不解释原理"）重试
├── 部分成功（如 8页中建了6页）？
│   → 补充调用 slides-agent 仅构建缺失页
├── 质量报告全 ❌（审查发现大面积问题）？
│   → 检查 PLAN.md 是否有问题 → 修正后重跑
└── 正常返回 → 按流程继续
```

### 降级总览

```
最优：排版审查→PASS→生图→图文审查→PASS→编译→抽检→PASS→交付
生图失败：→ text-only 编译（移除所有 placeholder）
编译失败：→ 检查 HTML → 修复 → 重试 → 仍失败 → 交付 PLAN.md + HTML
全部失败：→ 交付 PLAN.md + image prompts → 用户手动完成
```

---

## 核心原则

| # | 原则 |
|---|------|
| 1 | **主 agent 只编排不执行** — PLAN.md 撰写 + 子 agent 调度 |
| 2 | **子 agent 按需唤醒** — slides/image/review，互不污染上下文 |
| 3 | **三轮审查闭环** — 排版 → 图文 → 最终，每轮 ≤2 次修复 |
| 4 | **不通过不前进** — 排版不过不生图，图文不过不编译 |
| 5 | **文件系统传状态** — 子 agent 间不传大段文本，通过文件路径 |
| 6 | **prompt 模板外置** — 按需 READ，不内联在 SKILL.md |

---

## NEVER Do

### 编排层

- **NEVER** 在主 agent 中构建 HTML / 生成图片 / 执行审查 — 主agent的上下文窗口是稀缺资源，执行具体任务会快速膨胀导致后续阶段丢失关键信息
- **NEVER** 一次唤醒所有子 agent — 并行唤醒会导致：(1)前一步的审查结果无法指导后一步 (2)所有子agent同时消耗token (3)修复时无法精确定位问题来源
- **NEVER** 让子 agent 返回大量文件内容 — 子agent返回HTML源码等大段内容会直接撑爆主agent上下文，只需返回结论和摘要
- **NEVER** 跳过审查直接编译 — 三轮审查捕获的典型问题：排版雷同(30%)、图文不协调(20%)、内容空洞(15%)。跳过审查=交付低质量PPT
- **NEVER** 在子 agent 间传递大段文本 — 通过文件路径（PLAN.md / research_notes.md）传递。子agent间传递文本=重复占用多份上下文
- **NEVER** 把 prompt 模板内联在调度指令中 — READ references/prompts/ 对应文件。内联=每次调用重复消耗token且无法独立更新
- **NEVER** return empty-handed — deliver PLAN.md + image prompts as fallback

### 设计层

- **NEVER** 一页超过150字正文 — PPT是视觉媒体不是文档。超过150字=观众会读PPT而不是听演讲。密度的实现靠"极简(10-40字)/中等/深度(80-150字)"的标注，不是堆文字
- **NEVER** 连续2页同一密度 — 密→疏→密→疏的节奏感是观众保持注意力的核心机制。连续深度页=观众疲劳，连续极简页=信息量不足
- **NEVER** 使用与内容无关的装饰性配图 — 装饰图让PPT看起来"像AI生成的"。图要么传达信息（内容锚点驱动），要么不要。去掉图信息会受损吗？不会→text-only
- **NEVER** 所有页面使用相同的空间组织方式 — 10页至少6种不同排版逻辑。千篇一律的布局=观众在第3页后停止关注。变化本身是注意力管理工具
- **NEVER** 配图Prompt以风格描述开头 — Prompt前60%必须是内容锚点（画什么），风格关键词只在末尾。风格开头的Prompt生成的是"好看的无关图"
