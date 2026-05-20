---
name: ppt-auto-builder
description: >
  PPT全流程自动编排器 — 从需求收集到PPTX交付的完整流水线。
  主agent编排，4个子agent执行（知识搜索/slides构建/image生图/质量审查），三轮审查闭环确保质量。
  Use this skill whenever the user wants to create a presentation, even if they don't say "PPT" explicitly.
  Triggers on: 制作PPT、做演示文稿、做slides、生成课件、汇报材料、准备答辩、写报告、
  论文答辩、研究汇报、学术报告、企业汇报、教学课件、路演材料、毕业答辩、年度总结、
  "帮我做一个关于XX的PPT"、"我要做个汇报"、"帮我准备个演讲"、"做个展示"。
  English triggers: make PPT, create presentation, generate slides, PowerPoint, deck, slide deck,
  keynote, pitch deck, academic presentation, thesis defense slides, create a slideshow,
  prepare a talk, build a deck, make a report presentation, design slides for my speech.
  Also trigger when user provides a topic + asks for visual/deliverable output (e.g. "把XX做成演示").
  Do NOT trigger for: editing existing PPT/PPTX files, converting formats, extracting text from slides.
---

# PPT 自动制作 —— 编排器

> **主 agent 只做两件事：① 写 PLAN.md ② 调度子 agent。**
>
> **路径约定**：prompt 模板中的 `<WORKSPACE>` 是占位符，主 agent 在传递 prompt 给子 agent 前必须替换为当前工作目录的绝对路径。技能目录使用 `$HOME/.claude/skills/` 固定路径。

## 流程

```
阶段零~一：主 agent（依赖检查 → 需求收集）
     ↓
阶段二：Agent("知识搜索") ← 加载 references/prompts/knowledge-search.md
     ↓
阶段三：主 agent（撰写 PLAN.md，读取 references/ 索引验证）
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
OWS_DIR="$HOME/.claude/skills/open-websearch"

# 运行依赖检查（检查 pptxgenjs, playwright, sharp, huashu-slides, gpt-image-2, open-websearch）
node "$SKILL_DIR/scripts/check-deps.js"
```

如果依赖检查失败，报告缺失项并引导用户安装。

### open-websearch 自动安装

如果依赖检查报告 `open-websearch` 未安装，自动执行全局安装：

```bash
npx skills add https://github.com/Aas-ee/open-webSearch --skill open-websearch
```

安装完成后重新运行依赖检查确认。如果自动安装失败，报告错误并告知用户手动安装。

---

## 阶段一：需求收集

**READ** `references/question-guide.md` — 提问模板和场景推断规则。
**READ** `references/style-guide.md` — 风格推荐表（Q3需要推荐3个风格时加载）。
**Do NOT Load** `plan-spec.md`, `review-guide.md`, `prompts/*`（此阶段不需要）。

用 `AskUserQuestion` 一次问完 Q1~Q5（主题/页数/风格/受众/模式）。用户消息已包含的信息跳过。

---

## 阶段二：知识收集

**前置步骤**：
1. 创建工作目录结构：`mkdir -p ppt_workspace/slides ppt_workspace/garden-gpt-image-2/image ppt_workspace/references`
2. 如果用户提供了参考材料（文件/文本），将其复制/写入 `ppt_workspace/references/_user_materials.md`

**Do NOT Load** `plan-spec.md`, `style-guide.md`, `prompts/*`, `cdp-search-patterns.md`（此阶段不需要）。

### 知识来源决策树

```
有完整材料？→ 整理到 references/_user_materials.md → 仍调度知识搜索子agent（材料通常不够全面，需补充）
"直接做"？  → 跳过搜索，跳过子agent，进入阶段三
只有主题？  → 调度知识搜索子agent
```

### 知识搜索子 agent 调度

当需要搜索时，主 agent 执行以下步骤：

**步骤 1**：撰写搜索需求摘要文件
```
Write ppt_workspace/references/_brief.md，内容包含：
- PPT主题和副标题（从阶段一获取）
- 目标受众和场景（从阶段一获取）
- 预估页数（从阶段一获取）
- 需要搜索的知识维度列表（主agent根据主题列出 3-8 个维度）
- 语言要求（中文/英文/双语）
```

**步骤 2**：唤醒知识搜索子 agent
```
READ references/prompts/knowledge-search.md — 知识搜索子agent prompt模板
将模板中的 <WORKSPACE> 替换为当前工作目录的绝对路径
传递给 Agent() 执行
```

**步骤 3**：主 agent 验证结果（仅读取索引文件）
```
READ ppt_workspace/references/_index.md — 检查知识覆盖情况
```

### 验证门控

读取 `_index.md` 后，主 agent 检查：
- 每个维度的数据点数 >= 3
- 总数据点数 >= 预估页数 x 3
- 无"需补充"状态的维度

如果门控未通过：
- 明确告知用户哪些维度知识不足
- 更新 _brief.md 补充搜索方向
- 再调度一次知识搜索子 agent（最多 2 轮）

如果门控通过 → 进入阶段三

### 主 agent 在此阶段的边界

主 agent 在阶段二只做三件事：写 `_brief.md`、调度 knowledge-agent、读 `_index.md` 做门控。以下操作会污染主 agent 上下文，由 knowledge-agent 负责：
- 执行搜索（open-websearch / WebSearch / CDP）
- 阅读网页内容
- 整理搜索结果

### references 目录结构

```
ppt_workspace/references/
├── _brief.md              # 主agent写给子agent的搜索需求摘要
├── _user_materials.md     # 用户提供的原始材料（可选）
├── _index.md              # 子agent生成的知识库索引（主agent只读此文件）
├── ref-<维度1>.md          # 维度知识文件（由子agent按需创建）
├── ref-<维度2>.md          # 每个文件包含：摘要/数据点表/详细内容/来源列表
└── ...
```

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
| 二：知识搜索 | `prompts/knowledge-search.md` | plan-spec, style-guide, slides-build, image-generate, review-check |
| 四：构建HTML | `prompts/slides-build.md` | image-generate, review-check |
| 五：排版审查 | `prompts/review-check.md` + `review-guide.md` | slides-build, image-generate |
| 六：生成配图 | `prompts/image-generate.md` + `image-generation-guide.md` | review-check, slides-build |
| 七：图文审查 | `prompts/review-check.md` + `review-guide.md` | slides-build, image-generate |
| 八：编译PPTX | `prompts/slides-build.md` + `pptx-build-guide.md` | image-generate, review-check |
| 九：最终抽检 | `prompts/review-check.md` | 所有其他 |

### Prompt 模板文件

| 文件 | 包含的 prompt |
|------|-------------|
| `references/prompts/knowledge-search.md` | 知识搜索 / 补充搜索 |
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
| 2 | **子 agent 按需唤醒** — knowledge/slides/image/review，互不污染上下文 |
| 3 | **三轮审查闭环** — 排版 → 图文 → 最终，每轮 ≤2 次修复 |
| 4 | **不通过不前进** — 排版不过不生图，图文不过不编译 |
| 5 | **文件系统传状态** — 子 agent 间不传大段文本，通过文件路径 |
| 6 | **prompt 模板外置** — 按需 READ，不内联在 SKILL.md |

---

## 反模式（避免这些）

这些模式之所以有问题，原因如下——理解 why 比机械遵守更重要。

### 编排层

- 主 agent 不要自己构建 HTML / 生图 / 审查 / 搜索 — 这些操作产生的中间内容（网页文本、图片描述、HTML 源码）会迅速占满上下文窗口，导致后续阶段（PLAN.md 撰写、子 agent 调度决策）丢失关键信息。主 agent 的价值在于判断和调度，不在于执行。
- 搜索工作全部交给 knowledge-agent — 主 agent 只读 `_index.md` 做门控判断。如果主 agent 自己搜索，搜索结果和网页内容会直接污染编排层上下文。
- 子 agent 逐个唤醒，不要并行 — 前一步的审查结果需要指导后一步（排版审查不过就不该生图），并行会导致审查结果无法传递、同时消耗大量 token、修复时无法定位问题来源。
- 子 agent 只需返回结论和摘要 — 让子 agent 返回 HTML 源码等大段内容会直接撑爆主 agent 上下文。
- 审查环节不可跳过 — 三轮审查捕获的典型问题：排版雷同(30%)、图文不协调(20%)、内容空洞(15%)。跳过 = 交付低质量 PPT。
- 子 agent 间通过文件路径传递状态（PLAN.md / references/），不传大段文本 — 传递文本 = 多份上下文重复占用。
- prompt 模板通过 READ 按需加载，不内联在调度指令中 — 内联 = 每次重复消耗 token 且无法独立更新。
- 无论如何都要有交付物 — 至少交付 PLAN.md + image prompts，不能空手。

### 设计层

- 每页正文不超过 150 字 — PPT 是视觉媒体，超过 150 字观众会读 PPT 而不是听演讲。用"极简(10-40字)/中等/深度(80-150字)"的标注控制密度，不是堆文字。
- 不要连续 2 页同一密度 — 密→疏→密→疏的节奏感是观众保持注意力的核心机制。
- 配图必须传达信息，不要装饰性图片 — 装饰图让 PPT 看起来"像 AI 生成的"。判断标准：去掉这张图信息会受损吗？不会 → text-only。
- 10 页至少 6 种不同排版逻辑 — 千篇一律的布局 = 观众在第 3 页后停止关注。变化本身是注意力管理工具。
- 配图 Prompt 前 60% 是内容锚点（画什么），风格关键词在末尾 — 风格开头的 Prompt 生成的是"好看的无关图"。
