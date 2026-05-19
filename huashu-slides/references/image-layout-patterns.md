# 图片布局模式参考

> 定义7种标准图片布局模式，每种模式提供精确CSS定位和尺寸规范。
> 图片不强制每页使用——根据内容需要灵活选用0张、1张或多张。

## 图片集成方式（硬性约束）

**HTML 中绝对禁止使用 `<img>` 标签引入图片。** 原因：`<img src="...">` 的路径在 Windows 上会经历 Playwright → `file://` → html2pptx 去前缀 → pptxgenjs 错误的路径解析链，最终导致 `C:\C:\Users\...` 双重盘符，图片无法嵌入 PPTX。

**唯一正确的方式：占位符 div + build.js 插入。**

| 层 | 职责 |
|----|------|
| HTML | `<div class="placeholder" id="img-*">` 占位，尺寸即图片显示尺寸 |
| html2pptx | 解析 HTML，提取占位符的 `{id, x, y, w, h}` 位置信息 |
| build.js | `slide.addImage({path, x, y, w, h})` 用本地文件路径插入实际图片 |

**占位符 div 特征：**
- `class="placeholder"` — html2pptx 以此识别图片占位符
- `id` 唯一 — 与 `IMAGE_MAP` 中的 key 对应
- CSS 尺寸即最终 PPTX 中的图片显示尺寸
- 不包含任何子元素，不需要 src 属性

---

## 快速选型

| 模式 | 图片占比 | 最佳场景 | 图片数 |
|------|---------|---------|--------|
| `hero-cover` | 60-100% | 封面、情感冲击页 | 1 |
| `side-illustration` | 35-45% 宽 | 概念解释、对比 | 1-2 |
| `content-split` | 40-50% | 文字+图解并重 | 1 |
| `bottom-strip` | 20-30% 高 | 引用条、案例图 | 1 |
| `grid-embed` | 每格~20% | 多案例、对比展示 | 2-4 |
| `background` | 100% | 章节分隔、引言 | 1 |
| `text-only` | 0% | 纯文字排版 | 0 |

---

## 模式详细规范

### 1. hero-cover — 封面/大图模式

**图片位置**：居中或偏上，占slide视觉主体
**图片区域**：left: 0-80pt, top: 20-30pt, width: 560-720pt, height: 250-340pt
**文字位置**：图片上方/下方或叠加（需确保可读性）

```css
/* HTML 占位符示例 */
.hero-image {
  position: absolute; top: 24pt; left: 50%; transform: translateX(-50%);
  width: 580pt; height: 310pt;
  border: 1.2pt dashed #CCCCCC; border-radius: 4pt; background: #FAFAFA;
}
```

### 2. side-illustration — 侧栏插图模式

**图片位置**：左栏或右栏，与文字形成左右分栏
**图片区域**：宽 ~280-320pt, 高 ~260-320pt
**文字区域**：另一侧，宽 ~320-380pt

```css
/* 左图右文 */
.side-image {
  position: absolute; top: 100pt; left: 32pt;
  width: 300pt; height: 260pt;
  border: 1.2pt dashed #CCCCCC; border-radius: 4pt; background: #FAFAFA;
}
/* 右图左文 */
.side-image-right {
  position: absolute; top: 100pt; right: 32pt;
  width: 300pt; height: 260pt;
  border: 1.2pt dashed #CCCCCC; border-radius: 4pt; background: #FAFAFA;
}
```

### 3. content-split — 上下/对角线分割模式

**图片位置**：上半部或下半部，占据约一半面积
**图片区域**：宽 ~500-640pt, 高 ~160-200pt
**文字区域**：另半部分

```css
.split-image-top {
  position: absolute; top: 90pt; left: 40pt; right: 40pt;
  height: 175pt;
  border: 1.2pt dashed #CCCCCC; border-radius: 4pt; background: #FAFAFA;
}
.split-image-bottom {
  position: absolute; bottom: 50pt; left: 40pt; right: 40pt;
  height: 175pt;
  border: 1.2pt dashed #CCCCCC; border-radius: 4pt; background: #FAFAFA;
}
```

### 4. bottom-strip — 底部带状插图

**图片位置**：slide底部，横跨全宽
**图片区域**：left: 32pt, right: 32pt, bottom: 44-50pt, height: 55-80pt

```css
.bottom-strip-image {
  position: absolute; bottom: 48pt; left: 32pt; right: 32pt;
  height: 62pt;
  border: 1.2pt dashed #CCCCCC; border-radius: 4pt; background: #FAFAFA;
}
```

### 5. grid-embed — 网格嵌入模式

**图片位置**：作为卡片网格中的一格或多格
**图片区域**：每格 ~150-220pt × ~100-150pt

```css
/* 2列网格中的图片格 */
.grid-image {
  flex: 1; min-width: 160pt; height: 130pt;
  border: 1.2pt dashed #CCCCCC; border-radius: 4pt; background: #FAFAFA;
}
```

### 6. background — 全幅背景模式

**图片位置**：铺满整个720pt×405pt slide
**文字**：叠加在图片上方，需确保对比度

```css
.bg-image {
  position: absolute; top: 0; left: 0;
  width: 720pt; height: 405pt;
}
```

### 7. text-only — 纯文字排版

**无图片**。文字布局本身即为视觉设计：
- 标题突出（20-28pt bold）
- 信息层级清晰（字号阶梯14/11/9pt）
- 使用卡片、色块、边框线划分区域
- 留白充足，不拥挤

---

## 图片占位符CSS类名约定

| HTML class | 对应模式 | placeholder id 前缀 |
|-----------|---------|-------------------|
| `hero-image` | hero-cover | `img-hero` |
| `side-image` / `side-image-right` | side-illustration | `img-side` |
| `split-image-top` / `split-image-bottom` | content-split | `img-split` |
| `bottom-strip-image` | bottom-strip | `img-strip` |
| `grid-image` | grid-embed | `img-grid-N` |
| `bg-image` | background | `img-bg` |
| (无图片) | text-only | — |

---

## 构建时的图片适配规则

build.js 在将图片插入占位符时遵循：

1. **保持宽高比**：图片按原始比例缩放，不拉伸变形
2. **居中裁剪**：如果图片比例与占位符不匹配，居中裁剪（object-fit: cover 等效）
3. **最小分辨率检查**：图片实际像素低于占位符150%时发出警告
4. **多图处理**：同一slide多个占位符时，按id前缀匹配对应图片

```javascript
// 图片适配逻辑（build.js中实现）
function fitImageToPlaceholder(imgPath, placeholder) {
  const img = sharp(imgPath);
  const meta = await img.metadata();
  const imgRatio = meta.width / meta.height;
  const phRatio = placeholder.w / placeholder.h;

  if (Math.abs(imgRatio - phRatio) < 0.05) {
    // 比例匹配，直接填充
    return placeholder;
  }
  // 比例不匹配，居中裁剪
  if (imgRatio > phRatio) {
    // 图片更宽 → 按高度适配，左右居中裁剪
    const fitW = placeholder.h * imgRatio;
    return { ...placeholder, x: placeholder.x - (fitW - placeholder.w) / 2, w: fitW };
  } else {
    // 图片更高 → 按宽度适配，上下居中裁剪
    const fitH = placeholder.w / imgRatio;
    return { ...placeholder, y: placeholder.y - (fitH - placeholder.h) / 2, h: fitH };
  }
}
```

---

## PLAN.md 中如何指定图片布局

在逐页规划的"配图"字段中，使用以下格式：

```markdown
- **配图**: 1张
  - 文件: garden-gpt-image-2/image/pXX_name.png
  - 布局: side-illustration（右图左文）
  - 占位符id: img-side-right
- **配图**: 2张
  - 文件1: garden-gpt-image-2/image/pXX_a.png | 布局: grid-embed | id: img-grid-1
  - 文件2: garden-gpt-image-2/image/pXX_b.png | 布局: grid-embed | id: img-grid-2
- **配图**: 无（纯文字排版）
```

---

## 图片Prompt与布局的关联

生成图片时，prompt应与目标布局匹配：

| 布局模式 | 推荐图片比例 | Prompt注意事项 |
|---------|------------|---------------|
| hero-cover | 16:9 (1536×864) | 主体居中偏上，下方留30%空白给文字 |
| side-illustration | 4:3 或 1:1 (1024×1024) | 主体居中，细节丰富 |
| content-split | 16:9 或 3:2 (1536×1024) | 水平构图，不要纵向堆叠 |
| bottom-strip | 3:1 或 4:1 宽幅 | 全景/横条构图 |
| grid-embed | 1:1 (1024×1024) | 主体居中紧凑 |
| background | 16:9 (1536×864) | 低对比度/留大量空白区供文字叠加 |
