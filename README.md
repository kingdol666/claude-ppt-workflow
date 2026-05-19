# Claude PPT Workflow

Claude Code 技能套件 — 从需求到 PPTX 交付的全自动流水线。

三个技能协同工作：

- **ppt-auto-builder** — 主编排器，管理从需求收集到最终交付的完整流程
- **huashu-slides** — HTML 幻灯片构建与 PPTX 编译引擎，内置 20 种视觉风格
- **gpt-image-2** — GPT Image 2 图像生成/编辑，18 大类 80+ 结构化 Prompt 模板

## 架构

```
用户需求
   │
   ▼
ppt-auto-builder（主编排器）
   ├── 阶段 0-3：依赖检查 → 需求 → 知识 → PLAN.md
   │
   ├── 阶段 4：huashu-slides 构建 HTML slides
   ├── 阶段 5：排版审查（三轮审查闭环）
   ├── 阶段 6：gpt-image-2 生成配图
   ├── 阶段 7：图文审查
   ├── 阶段 8：huashu-slides 编译 PPTX
   └── 阶段 9：最终抽检
       │
       ▼
   OUTPUT.pptx 交付
```

## 安装

将三个技能目录复制到 Claude Code 的 skills 目录：

```bash
# 克隆仓库
git clone https://github.com/<your-username>/claude-ppt-workflow.git

# 复制到 Claude Code skills 目录
cp -r claude-ppt-workflow/ppt-auto-builder ~/.claude/skills/
cp -r claude-ppt-workflow/huashu-slides ~/.claude/skills/
cp -r claude-ppt-workflow/gpt-image-2 ~/.claude/skills/
```

## 依赖

```bash
# Node.js 包
npm install pptxgenjs playwright sharp

# gpt-image-2 需要的 API Key（用于图片生成）
# 在项目根目录的 .env 或 ~/.gateway.env 中配置：
OPENAI_API_KEY=your_key_here
```

运行 `node ~/.claude/skills/ppt-auto-builder/scripts/check-deps.js` 验证依赖是否就绪。

## 使用

在 Claude Code 中直接调用：

```
/ppt-auto-builder 创建一个5页的PPT，主题是"..."
```

编排器会自动：
1. 收集需求（主题、页数、风格、受众）
2. 搜索素材、构建知识库
3. 生成 PLAN.md 规划文件
4. 调度子 agent 构建 HTML、生成配图、三轮审查
5. 编译输出 PPTX

## 技能详情

### ppt-auto-builder

主编排器，职责：
- 依赖环境检查
- 需求收集与风格推荐
- 知识搜索与整理
- PLAN.md 撰写（逐页规划、配图决策、风格参数）
- 子 agent 调度（构建/审查/生图/编译）
- 三轮审查闭环（排版 → 图文 → 最终抽检）

### huashu-slides

幻灯片构建引擎，内置风格：

| 编号 | 风格 | 适用场景 |
|:---:|------|---------|
| 01 | Snoopy 温暖漫画 | 品牌/产品/教育 |
| 02 | 学習漫画 | 教育/培训 |
| 05 | xkcd 白板手绘 | 技术分享/内部分享 |
| 07 | 敦煌壁画 | 国风/东方主题 |
| 18 | Neo-Brutalism | 年轻受众/培训课件 |
| 19 | SMG 学术报告 | 学术答辩/论文汇报 |
| 20 | Study 双模学术 | 学术研究（暖+锐双模式）|
| P6 | NYT Magazine | 数据报告/正式商务 |

支持 Path A（可编辑 HTML）和 Path B（全 AI 视觉）两种构建路径。

### gpt-image-2

图像生成技能，覆盖场景：
- 学术图表（论文插图、方法流程图、数据可视化）
- 海报/宣传（品牌海报、活动 KV、编辑封面）
- UI 模型（界面原型、产品展示）
- 技术图表（架构图、流程图、ER 图）
- 漫画/分镜（四格漫画、TVC 分镜、角色设定）

支持三种运行模式：
- **Mode A**：Garden 本地模式，直接生成图片
- **Mode B**：宿主出图，调用 Claude Code 内置图像工具
- **Mode C**：纯顾问模式，输出高质量 Prompt

## 配图安全说明

gpt-image-2 的 API Key 通过环境变量 `OPENAI_API_KEY` 读取，不会硬编码在代码中。
复制 `.env.example` 为 `.env` 并填入你的 key 即可。

## License

MIT
