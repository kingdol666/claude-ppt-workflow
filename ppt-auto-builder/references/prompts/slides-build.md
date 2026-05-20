# slides-agent Prompt 模板

> ppt-auto-builder 的子 agent prompt 模板。按需加载，不内联在 SKILL.md。

---

## 构建 HTML（首次构建）

```
你是一个 HTML 幻灯片构建专家。请根据以下文件构建所有 HTML slides。

输入文件（必须先阅读）：
1. 规划文件: <WORKSPACE>/ppt_workspace/PLAN.md
2. 知识库索引: <WORKSPACE>/ppt_workspace/references/_index.md
3. 知识库详细文件（按需）: <WORKSPACE>/ppt_workspace/references/ref-*.md

操作步骤：
1. 先加载 huashu-slides 技能：Skill(skill="huashu-slides")
2. 阅读 PLAN.md 获取逐页规划、风格参数、配图规格
3. 阅读 _index.md 获取知识维度概览
4. 对每页幻灯片，根据该页涉及的知识维度，阅读对应的 ref-*.md 获取具体数据、引用、背景解释
5. 为每一页构建独立 HTML 文件，遵循以下硬性约束：
   - DIV 里文字必须用 <p> 或 <h1>-<h6> 包裹（包括页码、标签、emoji）
   - 不支持 CSS 渐变，只能纯色
   - <p>/<h*> 不能有背景/边框，放外层 <div>
   - 图片用 <div class="placeholder" id="img-*">，禁止 <img> 标签
   - inline 元素（<span>/<b>/<sup>）不能有 margin
5. 每页根据论证逻辑独立设计排版：
   - 相邻页不得使用相同的空间组织方式
   - 10页至少使用6种不同的排版逻辑（不是换颜色/字号，而是真正不同的空间组织）
   - 密度必须有呼吸感：不连续2页同为深度页
6. 输出所有 slide-01.html ~ slide-NN.html 到：
   <WORKSPACE>/ppt_workspace/slides/

完成后汇报：生成了几页，每页用了什么布局模式，是否有任何问题。
```

---

## 修复 HTML（审查后修复）

```
你是 HTML 幻灯片构建专家。请修复以下页面。

slides 目录: <WORKSPACE>/ppt_workspace/slides/
PLAN.md: <WORKSPACE>/ppt_workspace/PLAN.md

需要修复的页面：
<从 review-agent 报告中复制问题列表>

操作步骤：
0. 先加载 huashu-slides 技能获取 HTML 硬性约束：Skill(skill="huashu-slides")
   必须遵守：DIV里文字用 <p>/<h*> 包裹、不支持 CSS 渐变、<img> 标签禁止、inline 元素无 margin

对每个问题页面：
- ⚠️ 小修：直接 Edit HTML（调字号/间距/颜色）
- ❌ 重做：重写该页 HTML（保持签名元素不变）
修复后确认文件已保存。

完成后汇报：修复了哪些页面，做了什么改动。
```

---

## 编译 PPTX

```
你是 PPTX 编译专家。请将 HTML slides 组装为 PPTX 文件。

输入：
- HTML 文件: <WORKSPACE>/ppt_workspace/slides/slide-*.html
- 配图目录: <WORKSPACE>/ppt_workspace/garden-gpt-image-2/image/
- html2pptx.js: ~/.claude/skills/huashu-slides/scripts/html2pptx.js
- PLAN.md: <WORKSPACE>/ppt_workspace/PLAN.md

**重要**：html2pptx.js 是一个库模块（导出 async function），不是 CLI 工具。
你需要编写一个 compile.js 脚本来调用它。

操作步骤：
1. 读取 PLAN.md 获取 slide 尺寸（960pt×540pt 或 720pt×540pt）和 IMAGE_MAP 信息
2. 读取所有 HTML 文件，提取每个 placeholder div 的 id
3. 检查 garden-gpt-image-2/image/ 中对应的图片文件是否存在
4. 编写 compile.js 脚本，逻辑如下：

```javascript
const pptxgen = require('pptxgenjs');
const { html2pptx } = require('<HS_DIR>/scripts/html2pptx.js');
const path = require('path');

const IMAGE_MAP = {
  'img-hero': '../garden-gpt-image-2/image/p01_cover.png',
  // ... 其他占位符 id → 图片路径映射
};

(async () => {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_WIDE';  // 或自定义尺寸

  for (const htmlFile of sortedSlideFiles) {
    const { slide, placeholders } = await html2pptx(htmlFile, pptx);
    for (const p of placeholders) {
      const imgPath = IMAGE_MAP[p.id];
      if (imgPath) {
        slide.addImage({ path: path.resolve(imgPath), x: p.x, y: p.y, w: p.w, h: p.h });
      }
    }
  }

  await pptx.writeFile({ fileName: '<WORKSPACE>/ppt_workspace/OUTPUT.pptx' });
})();
```

5. 运行: node compile.js
6. 验证 OUTPUT.pptx 文件存在且大小 > 50KB

输出: <WORKSPACE>/ppt_workspace/OUTPUT.pptx

如果编译失败，诊断错误原因并尝试修复（如 placeholder 格式问题、路径问题、sharp 缺失等）。
完成后汇报：文件大小、页数、是否有错误。
```
