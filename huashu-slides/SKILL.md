---
name: huashu-slides
description: AI演示文稿全流程制作：内容结构化→设计选型→AI插画/HTML构建→PPTX导出。17种实战验证的视觉风格（漫画/极简/数据叙事/国风），可编辑HTML与全AI视觉两条路径自由选择。当用户提到"做PPT"、"制作幻灯片"、"演示文稿"、"Keynote"、"slides"、"课件"、"汇报材料"、"路演"时使用。同时作为 ppt-auto-builder 的构建引擎，按 PLAN.md 合约执行 HTML 构建/单页修复/PPTX 组装。
---

# AI Presentation Workflow

> **设计哲学：Context, not control。** 理解目标和风格感觉，自主做出设计决策。参考文件是灵感库，不是逐字执行的清单。

---

## Skill 路径

脚本安装路径因用户不同而不同。执行脚本前，先用 Glob 工具搜索 `**/huashu-slides/scripts/generate_image.py`，取所在目录作为 `SKILL_SCRIPTS_DIR`。

---

## 启动：三个决策

每次任务开始，确认以下三项。

### 协作模式

| 模式 | 适合 | 检查点 |
|------|------|-------|
| **Full Auto** | 信任AI交付，只需最终PPTX | 确认主题即可 |
| **Guided**（默认） | 把控方向，不管细节 | 大纲 / 风格选定 / 组装前 |
| **Collaborative** | 逐张审阅，全程掌控 | 每张slide |

### 制作路径

| | **Path A：可编辑HTML**（默认） | **Path B：全AI视觉** |
|---|---|---|
| 做法 | HTML slides + 选择性AI插画 → PPTX | 每张slide全AI生成图片 → PPTX |
| 优势 | 文字可在PPT中继续编辑，中文渲染完美 | 视觉震撼，风格高度统一 |
| 适合 | 商务汇报、需要反复修改的场景 | 艺术感强、发布演讲、快速草稿 |

### 个人形象融入

检查 `assets/character/` 目录：
- 有 `*-sheet.png` → 直接使用
- 有 `original.*` 无设定图 → 自动生成设定图
- 为空 → 询问用户是否需要

```bash
export $(grep GEMINI_API_KEY ~/.claude/.env) && \
uv run [SKILL_SCRIPTS_DIR]/generate_image.py \
  --input-image "assets/character/original.jpg" \
  --prompt "Character design sheet in [STYLE] style. Keep facial features faithfully. Show 3 expressions: neutral explaining, surprised/eureka, thinking. White background, no text." \
  --filename "assets/character/[style-name]-sheet.png" \
  --resolution 2K
```

同一风格只生成一次，后续复用。

---

## Step 1: 内容梳理

将原始材料转为逐张slide大纲。每张定义：
- **标题**：断言句，不是主题词 — 「Q3销售增长23%，新用户是主要驱动力」✓，「Q3销售」✗
- **要点**：最多3-4条
- **视觉类型**：插画 / 图表 / 流程图 / 引言
- Path A：是否需要AI插画？Yes/No + 一行场景描述

slide内容全部中文，仅保留必要英文（人名、品牌、技术术语）。

**Checkpoint（Guided/Collaborative）：** 表格展示大纲，用户确认后进入Step 2。

---

## Step 2: 风格选择

**核心洞察：插画/漫画类风格AI生成效果远优于"专业极简"。**

按主题推荐3个风格：

| 主题类型 | 第一推荐 | 第二推荐 | 第三推荐 |
|---------|---------|---------|---------|
| 品牌/产品 | Snoopy漫画 | Neo-Pop | 浮世绘/敦煌 |
| 教育/培训 | Neo-Brutalism | 学習漫画 | Snoopy漫画 |
| 技术分享 | xkcd白板 | Neo-Brutalism | Ligne Claire |
| 数据报告 | **NYT Magazine** ★ | Pentagram编辑 | Ligne Claire |
| 年轻受众 | Neo-Pop | 像素画 | 孔版印刷 |
| 国风/东方 | 敦煌壁画 | 浮世绘 | Takram思辨 |
| 正式商务 | **NYT Magazine** ★ | Pentagram编辑 | Build极简 |
| 路演/发布 | 苏联构成主义 | **NYT Magazine** ★ | Neo-Pop |
| 学术答辩/研究汇报 | **Study Style** ★ | SMG学术报告 | NYT Magazine |
| 内部分享 | Neo-Brutalism | The Oatmeal | xkcd白板 |

用户说"想要XX风格""不确定""有例子吗"→ 查 `references/design-movements.md` 转换美学语言。

**展示风格：** 用 Read 工具显示 `assets/style-samples/style-NN-name.png` 样例图。完整参数 → `references/proven-styles-gallery.md`

**Checkpoint（Guided/Collaborative）：** 展示3个风格 + 样例图，用户选定后进入Step 3。

---

## Step 3: 构建

> **构建模式感知**：ppt-auto-builder 可能要求"构建所有HTML"、"仅重建某页"、"仅组装PPTX"。严格按调用方指令执行对应阶段。

### Step 3.0：接收输入与模式判断（构建前必做）

1. **阅读 research_notes.md**（如调用方传入）：主要知识弹药库
2. **阅读 PLAN.md**：获取逐页规划、风格参数、配图规格
3. **确认配图目录**：记录所有可用图片路径和尺寸
4. **判断构建模式**：

| 调用方指令 | 行为 |
|-----------|------|
| "构建所有 HTML" | 完整 Step 3 Path A/B，所有 slide |
| "仅重建 slide-0X" | 只重写指定页 HTML，其余页不变 |
| "修复 slide-0X：调整排版" | 重写该页，保持签名元素、内容、占位符 |
| "修复 slide-0X：更换配图" | 更新该页占位符区域 + 重写 HTML，新占位符 id 保持稳定 |
| "仅组装 PPTX" | 跳过 HTML 构建，直接 Step 4 |

当收到"更换配图"指令时，新图片已由上游放入配图目录，占位符 id 不变（如 `img-side`），但尺寸可能变化 → 读取新图实际尺寸 → 调整占位符 CSS → 重写 HTML。

---

### Step 3 核心创作原则

> **总纲：每一页幻灯片都是独一无二的。** 它的排版、空间组织、图文关系、色彩倾向——全部由该页要传达的内容决定。风格参数是创作工具箱，不是套用模板。如果你发现自己在连续3页使用相同类型的卡片、相同的分栏比例、相同的视觉节奏——停下来，重新思考每一页的内容到底需要什么样的视觉表达。

---

#### 原则零：内容即设计（Content-Driven Design）— 最高优先级

> **设计的起点不是"选一个布局模式"，而是理解这一页的内容想说什么。** 排版、色彩、空间、图文关系——都应该服务于内容的传达，而不是反过来让内容迁就模板。

**每一页构建前，先回答三个问题：**

| # | 问题 | 为什么重要 |
|---|------|-----------|
| 1 | **这页的核心信息是什么？**（用一句完整的话写出来） | 决定了这页的"视觉主角"是谁 |
| 2 | **观众看完这页应该在3秒内记住什么？** | 决定了视觉锚点放在哪里 |
| 3 | **这个信息最适合用什么样的空间关系来表达？** | 决定了排版方案的方向 |

**根据内容类型选择空间表达（内容→设计映射）：**

| 内容要表达的关系 | 合适的空间表达 | 示例 |
|----------------|--------------|------|
| 因果递进 | 水平/垂直方向性排列，箭头引导视线 | A→B→C→结论 |
| 结构层次 | 嵌套、堆叠、或从上到下的层级 | 外层→内层、宏观→微观 |
| 对比对立 | 左右分屏、上下分屏、对角线对立 | 传统 vs 新方法 |
| 并列多维 | 非等大网格——重要的更大，不重要的更小 | 4个维度，其中1个是重点 |
| 数据冲击 | 超大数字 + 极简标注，留白包围 | 120pt数字独占视觉中心 |
| 概念关系 | 空间化的节点网络，距离表达关系远近 | 中心概念+分支 |
| 时间演进 | 水平时间轴，节点间距表达节奏 | 里程碑、技术代际 |

**禁止千篇一律的创意约束：**

1. **禁止连续3页出现相同类型的视觉组件。** 例如：如果第3、4页都用了 `border-left` 强调卡片，第5页必须换一种表达方式（如 pill 标签、色块分区、或纯文字+留白）。
2. **禁止在所有内容页使用相同的分栏比例。** 不要每页都是 50:50。根据内容的"主次关系"决定比例——主角占65-70%，配角占30-35%。
3. **每页必须有且仅有一个明确的视觉主角。** 如果观众不知道先看哪里，设计就失败了。视觉主角可以是：一张大图、一个超大数字、一个对比结构、或一个核心论点卡片。
4. **留白是主动的设计元素，不是"剩下的空间"。** 极简页留白≥40%。深度页留白≥20%。拥挤的幻灯片没有人愿意读。

**创意技法（按内容需要主动使用，打破单调）：**

- **非对称分栏**：当左右内容重要性不对等时，用 65:35、70:30、或黄金比例 62:38。对称 = 平等，不对称 = 主次。
- **尺度对比**：同一页内 120pt 数字 vs 9pt 脚注——尺度差本身就是信息层级，不需要额外的标题标注。
- **负空间聚焦**：大量留白包围一个小而重要的元素——观众的注意力反而被推向那个元素。
- **色彩节奏**：在暖色调页面序列中，第4页突然切换到高对比的锐学术模式——视觉"重音"提醒观众"这页很重要"。
- **重叠侵入**：关键数字或图表略微侵入相邻区域（负 margin），制造层次感和视觉张力。
- **不规则网格**：不总是等大等距的卡片。让内容的重要性决定卡片的大小——重要的论点占2倍面积，次要的占1倍。

---

#### 原则一：内容扩展（Content Expansion）

> **你是内容创作者，不是打字员。** PLAN.md 的要点是创作指引（15-30字/点），你需要扩展为完整幻灯片文案（50-120字/点）。使用 research_notes.md 中的具体数据、引用、背景解释。

知识来源优先级：research_notes.md → 你的模型知识 → 合理推断（不编造数据/引用）。

#### 原则二：详略得当（Appropriate Density）

每一页内容密度由三个因素决定：

| 因素 | 倾向极简（10-40字） | 倾向详细（80-150字） |
|------|-------------------|---------------------|
| 观众背景知识 | 已有 | 陌生 |
| 叙事角色 | 冲击/过渡/收束 | 论证/教育/说服 |
| 信息可查性 | 众所周知 | 独家数据/分析 |

**10页典型节奏**：封面[极简] → 目录[极简] → 背景[深度] → 方法[中等+图] → 内容交替[中等↔深度] → 总结[极简]。不连续两页同密度。

#### 原则三：布局多样性（Layout Variety）

**相邻两页不得相同布局。10页≥6种真正不同的空间组织方式。**

区分两类信息：
| 类型 | 行为 |
|------|------|
| **签名元素**（页眉/底部栏、配色、字体层级） | 每页保持一致 |
| **排版方案**（空间分区、组件排列、图文关系、视觉节奏） | 每页根据内容独立创作，相邻页不重复 |

布局创作两步：
1. **先理解内容**（见原则零）→ 确定论证逻辑和信息层级
2. **再创作排版**→ 根据内容选择合适的空间表达方式

完整布局模式库 → `references/image-layout-patterns.md`（灵感来源，不是菜单）。

#### 自查清单（每页构建后）

- [ ] 这页的排版方案是根据内容**原创设计**的，还是从前面几页复制过来的？
- [ ] 相邻页有真正的视觉差异吗？（不只是换了文字，而是空间组织方式不同）
- [ ] 如果连续3页都用了同类型组件——立刻回到原则零，重新思考其中一页的视觉表达
- [ ] 内容密度合适？（不连续2页同密度）
- [ ] 签名元素保持一致性？
- [ ] 每页有且仅有一个明确的视觉主角？
- [ ] 10页整体≥6种不同的空间组织方式？密度有呼吸感？

---

### Path A：HTML + 选择性插画

每张slide生成独立HTML文件。**生成前必须遵守 5 条 html2pptx 硬性约束：**

1. **DIV 里文字必须用 `<p>` 或 `<h1>`-`<h6>` 包裹，不能裸文字。** 这包括：页码数字、章节标签、表格单元格、图标字符(emoji/unicode)、任何含 `<sup>`/`<sub>`/`<b>` 的混合内容。常见违规：`<div class="page-num">1</div>` ❌ → `<div class="page-num"><p>1</p></div>` ✅
2. 不支持 CSS 渐变，只能纯色
3. `<p>`/`<h*>` 不能有背景/边框，放在外层 `<div>`
4. **图片必须用占位符 div** `<div class="placeholder" id="img-*">`，**禁止 `<img>` 标签**
5. **inline 元素（`<span>`, `<b>`, `<i>`, `<sup>`, `<sub>`）不能有 margin** — PowerPoint 不支持。常见违规：`<span style="margin-right:6pt">` ❌ → 用父元素 padding 替代

> `<img>` 的 src 在 Windows 上经 Playwright → file:// → pptxgenjs 会损坏为 `C:\C:\Users\…` 双重盘符。

```html
<!-- ✅ 唯一正确方式 -->
<div class="placeholder" id="img-hero" style="position:absolute;left:50%;top:50pt;width:580pt;height:220pt;transform:translateX(-50%);"></div>
```

**占位符约束：**
- `class="placeholder"` + 唯一 `id`（如 `id="img-hero"`）
- CSS 尺寸即最终 PPTX 图片显示尺寸
- 不包含子元素，不设 src
- id 是稳定合约：图片文件可能重新生成，但占位符 id 不变

**build.js 插入模式：**
```javascript
// ⚠️ html2pptx 是默认导出 (module.exports = html2pptx)，不能用解构
const html2pptx = require('[SKILL_SCRIPTS_DIR]/html2pptx.js');

const { slide, placeholders } = await html2pptx(htmlPath, pres);
for (const ph of placeholders) {
  slide.addImage({ path: path.join(IMAGE_DIR, IMAGE_MAP[ph.id]), x: ph.x, y: ph.y, w: ph.w, h: ph.h });
}
```

**图片布局集成**（详见 `references/image-layout-patterns.md`）：
- 从 PLAN.md 读取每页配图规格（数量、布局模式、占位符id、CSS区域）
- 使用对应 CSS 类名创建占位符 div
- text-only 页不做占位符
- 一页多图用 grid-embed 模式

**AI 插画生成：**
```bash
export $(grep GEMINI_API_KEY ~/.claude/.env) && \
uv run [SKILL_SCRIPTS_DIR]/generate_image.py \
  [--input-image "assets/style-samples/style-NN-name.png"] \
  --prompt "[scene description in [STYLE] style]" \
  --filename "slide-NN-illustration.png" \
  --resolution 2K
```

### Path B：全AI视觉

每张slide生成完整图片（含所有文字和布局）：
```bash
export $(grep GEMINI_API_KEY ~/.claude/.env) && \
uv run [SKILL_SCRIPTS_DIR]/generate_image.py \
  --input-image "assets/style-samples/style-NN-name.png" \
  --prompt "[完整视觉描述：布局+内容+风格+情绪]" \
  --filename "slide-NN-name.png" \
  --resolution 2K
```

**短prompt比长prompt效果更好。** 描述mood和内容，不要约束颜色比例、构图位置、字号数字。详细提示词模板 → `references/prompt-templates.md`

---

## Step 4: 组装 PPTX

### 模式判断

| 前置条件 | 执行 |
|---------|------|
| HTML 已审查通过 | 仅组装：html2pptx + build.js |
| HTML 未构建 | 先完整构建再组装 |
| 配图文件有更新 | 更新 IMAGE_MAP 中的文件名映射，其余不变 |

### 前置检查（组装前）

- [ ] 所有 slide-*.html 文件存在且数量与 PLAN.md 一致
- [ ] build.js 已生成（含 IMAGE_MAP 映射）
- [ ] IMAGE_MAP 中每个 key 对应的图片文件存在

### Path A 组装（html2pptx + build.js 两步走）

```bash
# 步骤 1：HTML → PPTX
node [SKILL_SCRIPTS_DIR]/html2pptx.js \
  slide-01.html slide-02.html ... slide-NN.html \
  -o OUTPUT.pptx

# 步骤 2：插入配图
node build.js
```

**build.js 模板：**
```javascript
const path = require('path');
const pptxgen = require('pptxgenjs');
const { html2pptx } = require('[SKILL_SCRIPTS_DIR]/html2pptx.js');

const IMAGE_DIR = 'C:/path/to/images/';
const IMAGE_MAP = {
  'img-hero': 'p01_cover.png',
  'img-side': 'p04_gnn.png',
  // 占位符 id → 文件名，图片重新生成时只改文件名，不改 id
};

async function main() {
  const pres = new pptxgen();
  const htmlFiles = ['slide-01.html', 'slide-02.html', /* ... */];

  for (const htmlFile of htmlFiles) {
    const { slide, placeholders } = await html2pptx(htmlPath, pres);
    for (const ph of placeholders) {
      const imgFile = IMAGE_MAP[ph.id];
      if (imgFile) {
        slide.addImage({ path: path.join(IMAGE_DIR, imgFile), x: ph.x, y: ph.y, w: ph.w, h: ph.h });
      }
    }
  }
  await pres.writeFile({ fileName: 'OUTPUT.pptx' });
}
main().catch(console.error);
```

> **Windows 路径**：build.js 中所有路径用正斜杠 `/`。

### Path B 组装（整页图片 → PPTX）

```bash
uv run [SKILL_SCRIPTS_DIR]/create_slides.py \
  slide-01.png slide-02.png ... slide-NN.png \
  --layout fullscreen -o output.pptx
```

---

## Step 5: 收尾

- Path A：可用 Playwright 截图预览关键 slides
- Path B：直接用 Read 工具显示生成的 PNG

**Checkpoint（所有模式）：** 展示预览，交付 PPTX，汇报：完成X张，风格Y，文件路径Z。

---

## Assets 目录

```
assets/
├── style-samples/     # 风格样例图（视觉参照 + 垫图两用）
└── character/         # 用户个人形象
    ├── original.jpg   # 用户提供的照片
    └── [style]-sheet.png  # 各风格的角色设定图
```

---

## 参考文件

| 需要 | 文件 |
|------|------|
| 17种风格完整参数（色值/排版/构图/prompt规范） | `references/proven-styles-gallery.md` |
| HTML规范 + Path A/B提示词模板 | `references/prompt-templates.md` |
| 图片布局模式（7种标准模式+CSS+PLAN.md接口） | `references/image-layout-patterns.md` |
| 设计运动 → 风格映射（美学词汇转换） | `references/design-movements.md` |
| 设计原则与视觉规范 | `references/design-principles.md` |
| Snoopy风格专项深度指南 | `references/proven-styles-snoopy.md` |

---

## NEVER Do

- **NEVER** use `<img>` tags in HTML slides — Windows path corruption. Always use `<div class="placeholder" id="img-*">` + build.js `slide.addImage()`
- **NEVER** put raw text directly in `<div>` — wrap in `<p>` or `<h1>`-`<h6>`. This includes page numbers, section tags, table cells, emoji/unicode icons, and mixed content with `<sup>`/`<sub>`. Every single text node in a DIV must be wrapped.
- **NEVER** use CSS gradients (`linear-gradient`, `radial-gradient`) — solid colors only
- **NEVER** put backgrounds/borders/shadows on `<p>` or `<h*>` — use outer `<div>`
- **NEVER** put margin on inline elements (`<span>`, `<b>`, `<i>`, `<sup>`, `<sub>`) — PowerPoint doesn't support it. Use padding on the parent container instead.
- **NEVER** use 720pt×405pt for 16:9 slides — html2pptx validates against LAYOUT_WIDE which is 960pt×540pt (13.333"×7.5")
- **NEVER** destructure html2pptx import (`{ html2pptx }`) — it's a default export (`module.exports = html2pptx`), use `const html2pptx = require(...)`
- **NEVER** copy PLAN.md bullet points verbatim onto slides — expand 3-5× with context, data, and explanation from research_notes.md
- **NEVER** use the same layout on two adjacent slides — 10 slides must use ≥6 genuinely different spatial organizations
- **NEVER** make every page the same density — alternate between sparse (impact pages) and dense (argument pages)
- **NEVER** write slides without a visual anchor — every page needs exactly one element that grabs attention in 3 seconds
- **NEVER** use the same visual component type (e.g., border-left cards) on 3 consecutive pages — if you catch yourself doing this, redesign one page with a fundamentally different visual expression
- **NEVER** default to 50:50 split columns on every content page — the proportion should reflect the content's information hierarchy
- **NEVER** start designing before understanding what the page is trying to say — 原则零 always comes first
- **NEVER** write PLAN.md via bash heredoc on Windows — special characters (backticks, $, superscript) break heredoc. Use Python `open().write()` instead.
