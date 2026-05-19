# 图片生成委托指南

> ppt-auto-builder 不生图。本文件是阶段四的操作手册——如何使用 gpt-image-2 技能为 PLAN.md 配图清单生成图片。

---

## 模式决策树

PLAN.md 配图清单统计后，按以下路径执行：

```
配图清单为空？
  ├── 是 → 跳过阶段四，直接进入阶段五
  └── 否 → 检测 gpt-image-2 模式
            ├── mode=A  → 正常生图（完整方案）
            ├── mode=A? → 尝试生图，失败则降级
            ├── mode=B  → 宿主出图模式
            └── mode=C  → 纯文本顾问模式（不生成图）
```

检测命令：

```bash
node "<GI_DIR>/scripts/check-mode.js" --json
```

---

## Mode A：完整生图流程（最佳方案）

gpt-image-2 有 API Key，可完整端到端出图。

**使用 Skill 工具调用 gpt-image-2 技能**，传入任务：

```
使用 gpt-image-2 技能为 PLAN.md "配图生成清单"中的所有图片逐一生成。
- PLAN.md 路径: ppt_workspace/PLAN.md
- 图片输出目录: garden-gpt-image-2/image/
- 只生成清单中列出的图片，text-only页不需要图
- 所有图片可以并行生成
- 参数: --size 1536x1024 --quality high
```

每张图的 Prompt 已在 PLAN.md 中写好（含风格关键词），直接使用。技术细节由 gpt-image-2 技能自行处理。

### generate.js 正确参数（强制约束）

> `generate.js` 的输出路径参数是 `--image`，**不是** `--output**。用错会导致 `Unknown option` 错误退出。
>
> **`--size` 参数必须使用 PLAN.md 配图清单中每张图指定的尺寸**，不使用此处的默认示例值。

| 参数 | 用途 | 示例 |
|------|------|------|
| `--prompt` | 生图提示词 | `--prompt "..."` |
| `--image` | **输出图片路径**（不是 --output） | `--image "garden-gpt-image-2/image/p01_cover.png"` |
| `--size` | 图片尺寸（从 PLAN.md 配图清单读取） | `--size 1536x1024` |
| `--quality` | 质量等级 | `--quality high` |
| `--prompt-output` | 单独指定 prompt 保存路径 | `--prompt-output "garden-gpt-image-2/prompt/xxx.md"` |
| `--output-format` | 输出格式（png/jpeg/webp） | `--output-format png` |
| `--promptfile` | 从文件读取 prompt | `--promptfile "path/to/prompt.md"` |

**典型调用（示例尺寸，实际使用 PLAN.md 中的值）：**
```bash
node "<GI_DIR>/scripts/generate.js" \
  --prompt "Neo-Brutalism flat vector: ..." \
  --size 1536x1024 \
  --quality high \
  --image "garden-gpt-image-2/image/p01_cover.png"
```

### 生图失败诊断

| 错误信息 | 原因 | 修复 |
|---------|------|------|
| `Unknown option: --output` | 用了 `--output` 指定输出路径 | 改为 `--image` |
| `Missing value for --image` | 用了 `--image` 但没给值 | `--image "path/to/output.png"` |
| `Unknown option: --filename` | 用了不存在的 `--filename` | 用 `--image`（输出路径）或 `--prompt-output`（prompt 落盘路径） |

---

## Mode A?：尝试生图，失败则降级

有 API Key 但可能过期/额度不足。调用 gpt-image-2 技能（同 Mode A），但监控结果：

- **生成成功** → 进入阶段五
- **生成失败（401/429/配额耗尽）** → 立即降级到 Mode C，**不要反复重试**

降级告知用户：
```
⚠️ gpt-image-2 生图失败（原因：{具体错误}）。
已自动降级为无图模式：PLAN.md 中的配图 Prompt 已保留，
huashu-slides 将使用占位符构建 text-only 风格的 HTML 幻灯片。
您之后可以用任意图像工具按 PLAN.md 中的 Prompt 生成图片后手动替换。
```

---

## Mode B：宿主出图模式

当前宿主（如 ChatGPT/Codex/Gemini/Cursor）自带图像工具。

**行为**：
1. 不调用 gpt-image-2 的 generate.js（无 API Key，必失败）
2. 从 PLAN.md "配图生成清单"中逐条取出 Prompt
3. 调用宿主自带的图像工具（如 `image_generation` MCP 工具），传入 Prompt 和尺寸参数
4. 将生成的图片保存到 `garden-gpt-image-2/image/`，文件名与 PLAN.md 清单一致

**如果宿主图像工具也不可用** → 降级到 Mode C。

---

## Mode C / 降级：无图模式（优雅降级）

没有任何图像生成能力。

1. **不调用任何图像工具**——不会假装出图
2. 明确告知用户当前状态：

```
ℹ️ 当前环境无图像生成能力（gpt-image-2 处于 Mode C）。
PLAN.md 已完整规划了内容和配图方案，以下两种方式继续：

方式一（推荐）：直接进入无图构建
  → huashu-slides 将以 text-only 模式构建完整 HTML 幻灯片
  → 纯文字排版 + 色块 + 卡片本身就是优雅的设计

方式二：手动生成图片后再构建
  → PLAN.md "配图生成清单"中每张图都有完整的 Prompt（含风格关键词）
  → 用 ChatGPT/DALL·E/Midjourney 等工具按 Prompt 生成图片
  → 保存到 garden-gpt-image-2/image/（文件名见清单）
  → 告诉我"图片已就绪"，我继续构建

您选择哪种方式？
```

3. 等待用户选择 → 方式一进入阶段五 text-only，方式二暂停等待。

---

## 全部 text-only（配图清单为空）

如果 PLAN.md 的配图清单为空：
- 不调用 gpt-image-2，不检测模式
- 直接告诉用户："本次PPT全部采用纯文字排版(text-only)，不生成配图。"
- 直接进入阶段五
