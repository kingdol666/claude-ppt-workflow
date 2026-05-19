# PPTX 构建委托指南

> ppt-auto-builder 不写 HTML、不组装 PPTX。本文件是 SKILL.md 阶段四~九的详细操作手册。
> **SKILL.md 是权威编排器，本文件提供细节补充。当两者有冲突时以 SKILL.md 为准。**

---

## 构建前决策

```
图片是否全部就绪？
  ├── 是（有配图） → 5.1 HTML 构建 → 5.2 视觉审查 → 5.4 组装 PPTX
  ├── 是（全部 text-only） → 5.1 HTML 构建 → 5.2 视觉审查 → 5.4 组装 PPTX
  └── 否（Mode C 降级/生图失败） → text-only 降级构建
```

---

## 5.0 知识直通（不可跳过）

**这是PPT质量的关键瓶颈之一。** 研究阶段搜到的丰富数据必须显式传递给 huashu-slides。

调用 huashu-slides 时必须在 prompt 中显式包含文件路径：

```
必须首先阅读以下文件获取完整领域知识：
1. 研究笔记: C:/Users/87287/workspace/ppt_workspace/research_notes.md
2. 规划文件: C:/Users/87287/workspace/ppt_workspace/PLAN.md
3. 配图目录: C:/Users/87287/workspace/ppt_workspace/garden-gpt-image-2/image/

研究笔记包含从学术论文中提取的关键数据、核心概念定义、时间线、
代表工作摘要和领域争议。这些是幻灯片内容扩展的主要弹药库。
使用研究笔记中的具体数据、引用和背景来充实每一页。
```

**验证**：huashu-slides 完成后，抽查 2-3 页幻灯片是否包含 research_notes.md 中的具体数据（而非仅 PLAN.md 中列出的数据）。

---

## 5.1 第一轮：构建 HTML 幻灯片（不含PPTX组装）

向用户说明"内容规划和配图已完成，现在交给 huashu-slides 构建HTML幻灯片"。

**调用 huashu-slides（仅构建HTML，不组装PPTX）：**

```
Skill(skill="huashu-slides", args="
  根据 PLAN.md 构建完整 N 页 HTML 幻灯片（仅构建 HTML，暂不组装 PPTX）。

  输入来源：
  - PLAN.md: C:/Users/87287/workspace/ppt_workspace/PLAN.md
  - 研究笔记: C:/Users/87287/workspace/ppt_workspace/research_notes.md
  - 配图: C:/Users/87287/workspace/ppt_workspace/garden-gpt-image-2/image/

  核心要求：
  - 跳过 Step 1（内容梳理）和 Step 2（风格选择），PLAN.md 已完整定义
  - 直接从 Step 3 Path A 开始：为每页制作独立 HTML 幻灯片
  - 必须首先阅读 research_notes.md 获取完整领域知识
  - 遵循 PLAN.md 中每页的密度标注（极简/中等/深度）
  - 遵循布局多样性规则（相邻页不同布局，10页≥5种模式）
  - 硬性约束：HTML 绝对禁止 <img> 标签，必须用 <div class='placeholder' id='img-*'>
  - 输出所有 slide-*.html 到 slides/ 目录
  - 不运行 html2pptx，不组装 PPTX
")
```

huashu-slides 完成后，验证 HTML 文件完整性：

```
Glob(pattern="slide-*.html", path="ppt_workspace/slides/") → 数返回的文件数量
```

页数不匹配 → 检查缺失页面 → 补建 → 重新验证。

---

## 5.2 视觉审查：截图 + 逐页评估

> **关键回路——ppt-auto-builder 第一次"看"自己产出的东西。**
>
> **评分标准**：统一使用 `references/review-guide.md` 的 5维25分制。
> 本轮（排版审查）跳过"图文协调"维度，按 4维20分评判。

### 步骤 1：生成所有幻灯片截图

逐个 slide 截图（Windows 绝对路径，避免 cygpath）：

```bash
npx playwright screenshot --wait-for-timeout=1000 \
  "file:///C:/Users/87287/workspace/ppt_workspace/slides/slide-01.html" \
  "C:/Users/87287/workspace/ppt_workspace/slides/_review_01.png"
```

如果 playwright screenshot 不可用，使用 CDP 截图或降级方案（直接用 Read 工具查看 HTML）。

### 步骤 2：逐页审查（4维度评分，本轮不含图文协调）

用 Read 工具逐一查看每张截图，按 `review-guide.md` 标准打分（1-5）：

| 维度 | 审查要点 |
|------|---------|
| **排版与布局** | 布局匹配论证逻辑？相邻页不同？密度有呼吸感？ |
| **视觉层次** | 标题→要点→脚注清晰，关键数据突出？ |
| **内容质量** | 数据有上下文解释？引用完整？论点有递进？ |
| **风格一致** | 签名元素正确？配色/字体全篇统一？ |

### 步骤 3：诊断与分类

```
每页总分≥16分（4项×4分） → ✅ PASS
每页总分 12-15分           → ⚠️ MINOR（小幅修改）
每页总分 <12分             → ❌ FAIL（需要重做）
```

**关键规则**："排版与布局" ≤2 分 → 无论总分 → 重做该页。

### 步骤 4：输出审查报告

```markdown
## 视觉审查报告

| 页 | 排版 | 层次 | 内容 | 风格 | 总分 | 判定 |
|----|------|------|------|------|------|------|
| 1 | 4 | 4 | 4 | 5 | 17 | ✅ |
| 2 | 4 | 4 | 5 | 5 | 18 | ✅ |
| ... | ... | ... | ... | ... | ... | ... |

**需要修复的页**：
- Slide 3: 问题描述 + 修复方向
- Slide 7: 问题描述 + 修复方向
```

---

## 5.3 修复迭代（最多2轮）

### 第一轮修复

- **小修（⚠️）**：调整字号、间距、卡片大小、颜色对比 → 直接 Edit HTML
- **大修（❌）**：布局不匹配论证、密度错误 → 重写该页 HTML

修复后重新截图验证（仅截修复页）：

```bash
npx playwright screenshot "file://<fixed-slide>.html" \
  "C:/Users/87287/workspace/ppt_workspace/slides/_review_slide-0X.png"
```

### 第二轮修复（如需要，最后一轮）

第一轮后仍有 ⚠️/❌ → 直接重写该页 HTML → 重新截图验证。

2轮后仍不达标 → 标注 `[视觉降级]` 继续组装，不无限循环。

### 全局检查（所有页面PASS后）

在组装PPTX前做最后检查：
- [ ] 相邻页无重复布局模式？
- [ ] 10页使用了≥5种不同布局？
- [ ] 密度有呼吸感？（不连续2页同密度）
- [ ] 所有配图页 placeholder div 的 id 唯一且与 build.js 匹配？
- [ ] 所有 text-only 页确实没有 placeholder div？

---

## 5.4 组装最终 PPTX

所有页面PASS全局检查后，组装PPTX：

```
Skill(skill="huashu-slides", args="
  Step 4 组装 PPTX（仅组装，不重新构建HTML）。

  输入：
  - HTML文件: C:/Users/87287/workspace/ppt_workspace/slides/slide-*.html
  - 配图: C:/Users/87287/workspace/ppt_workspace/garden-gpt-image-2/image/
  - build.js: C:/Users/87287/workspace/ppt_workspace/build.js
  - html2pptx.js: <SKILL_SCRIPTS_DIR>/html2pptx.js

  运行: node html2pptx.js slide-01.html ... slide-10.html -o OUTPUT.pptx
  然后运行: node build.js 插入配图

  输出: C:/Users/87287/workspace/ppt_workspace/OUTPUT.pptx
")
```

---

## 降级路径

### text-only 降级构建（无图时）

如果图片未就绪（Mode C 降级 / 生图失败），仍可构建 text-only 版 PPTX：

```
Skill(skill="huashu-slides", args="
  根据 PLAN.md 构建 text-only 版 PPTX。

  输入来源：
  - PLAN.md: C:/Users/87287/workspace/ppt_workspace/PLAN.md
  - 研究笔记: C:/Users/87287/workspace/ppt_workspace/research_notes.md
  - 配图: 无（全部页面使用 text-only 排版）

  要求：
  - 跳过 huashu-slides 的 Step 1 和 Step 2
  - 直接 Step 3 Path A 构建 HTML 幻灯片
  - 所有页面纯文字排版：大标题 + 卡片色块分区 + 数据大字突出 + 充足留白
  - 忽略 PLAN.md 中的配图字段，不插入任何图片占位符
  - 风格参数以 PLAN.md "风格参数速查"为准
  - 输出所有 slide-*.html → 组装 PPTX
  - 输出 OUTPUT.pptx
")
```

> text-only 不是妥协——好的字体层级 + 色块分区 + 数字突出 > 无关的装饰图。

### Path B 备选：全AI视觉（最后防线）

仅在 Path A html2pptx 连续失败时使用：

```
Skill(skill="huashu-slides", args="
  使用 Path B（全AI视觉）构建 PPTX。

  输入：
  - PLAN.md: C:/Users/87287/workspace/ppt_workspace/PLAN.md
  - 风格样例: huashu-slides/assets/style-samples/style-XX-name.png

  要求：
  - 使用 Path B 为每页生成整页 PNG
  - 用 create_slides.py 组装 PNG → PPTX
  - 输出 OUTPUT.pptx
")
```

**Path B 注意**：文字渲染后不可编辑，中文偶有错误。仅作为最后防线。

---

## 完整质量保障流水线

```
research_notes.md ──→ huashu-slides 知识直通
        ↓
   构建HTML（所有slide）
        ↓
   截图 → 逐页审查 → 诊断报告
        ↓
   ⚠️/❌ 页面 → 修复（≤2轮）→ 重新截图验证
        ↓
   全局检查 → ✅
        ↓
   组装PPTX → OUTPUT.pptx
```
