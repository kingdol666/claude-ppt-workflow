# PPT制作规划文件（示例）

> 这是 ppt-auto-builder 输出的标准 PLAN.md 示例。
> 展示：智能配图决策(10页仅3张图)、风格关键词注入、内容驱动的Prompt。
> 下游技能(gpt-image-2、huashu-slides)可直接以此文件为输入。
>
> **注意**：本示例使用 SMG #19（单模式学术风格）。如果用户选择 Study Style #20（双模式学术），
> "风格参数速查"部分必须包含"暖学术模式"和"锐学术模式"两套完整参数（见 plan-spec.md 模板）。
> 本示例的 slide 尺寸为 720pt×540pt (4:3学术比例)；如果使用 16:9 宽屏，改为 960pt×540pt。

---

## 一、基本信息

| 字段 | 值 |
|------|-----|
| PPT标题 | AI安全不是选择题——大模型对齐的三大支柱与五项工程实践 |
| 副标题 | 从RLHF到Constitutional AI：让模型做我们想让它做的事 |
| 总页数 | 10页（其中3页配图，7页text-only） |
| 制作引擎 | huashu-slides + gpt-image-2 |
| 路径 | Path A（可编辑HTML） |
| 风格 | Study Style #20 — 学术研究双模系统（暖学术 + 锐学术） |
| 语言 | 中文 |
| 受众 | 学术（技术团队 + 管理层混合） |

## 二、风格参数速查

- **风格编号**: style-19-smg-academic
- **比例**: 4:3（720pt×540pt）
- **主色**: #A50021（深绯红，用途：标题、页眉、重点标注）
- **副色**: #000066（海军蓝，用途：正文、图表轴线、底部栏）
- **卡片底色**: #F0F4F8（浅灰蓝）
- **重点卡片色**: #FFF5F5（浅绯红底）
- **页面背景**: #FFFFFF
- **页眉**: bg #A50021, h=36pt, color #FFFFFF
- **底部栏**: bg #000066, h=28pt, color #FFFFFF
- **标题字体**: Noto Sans SC Bold, 24pt, color #A50021
- **正文字体**: Noto Sans SC Regular, 13pt, color #333333
- **章节标签样式**: pill, bg #A50021, white text, border-radius 12pt
- **内容卡片样式**: bg #F0F4F8, border-left 4pt solid #A50021
- **重点卡片样式**: bg #FFF5F5, border-left 4pt solid #000066
- **生图风格关键词**: "publication-quality scientific figure, clean white background, precise data visualization with clearly labeled axes and legends, professional sans-serif typography for figure labels, color-blind friendly palette using navy blue #000066 and crimson #A50021 accent, crisp vector-quality lines and geometric shapes, flat 2D style with no photographic textures, no decorative elements no rounded corners no drop shadows no gradients, focused on data clarity and information density, suitable for Nature/Science/Cell journal figures"

## 三、逐页规划

### 第1页：封面
- **标题**: AI安全不是选择题——大模型对齐的三大支柱与五项工程实践
- **布局**: 居中封面
- **内容要点**:
  - 要点1：副标题——从RLHF到Constitutional AI：让模型做我们想让它做的事
  - 要点2：演讲者/机构/日期
- **图片决策**: Q1✓ Q2✓ Q3✓ Q4✓ → 1张（封面需要视觉锚点建立第一印象）
- **配图类型**: hero-cover
- **配图**:
  - 文件: garden-gpt-image-2/image/p01_cover.png
  - 布局模式: hero-cover
  - 占位符id: img-hero
  - 图片区域: left: 50%; top: 30pt; width: 520pt; height: 280pt
  - 推荐比例: 16:9 (1536×864)
- **配图Prompt**: "Abstract scales of justice merging with neural network nodes, one side RLHF reward signal, other side constitutional AI principles, balancing human values and model capability, clean academic diagram style, navy blue #000066 + crimson #A50021 accents, white background, precise geometric layout, 16:9 with bottom 25% empty for title overlay, no text"
- **风格注入**: 已融入风格关键词 → "clean academic diagram, navy blue + crimson accents, white background, precise geometric layout"

### 第2页：目录
- **标题**: 本次分享你将了解到：三大支柱 × 五项实践
- **布局**: 网格卡片（3列×2行）
- **内容要点**:
  - 要点1：支柱一：对齐目标定义——从"有用"到"有益"
  - 要点2：支柱二：对齐方法体系——RLHF → DPO → Constitutional AI
  - 要点3：支柱三：对齐评估——红队测试与自动化Benchmark
  - 要点4：五项工程实践：数据管线/奖励模型/安全过滤/监控告警/迭代闭环
- **图片决策**: Q2不通过 → **text-only**（目录结构本身就是视觉设计，用卡片+色块呈现）

### 第3页：为什么AI安全是"生存问题"？
- **标题**: 2023-2025：大模型能力增长1000倍，对齐研究仅增长10倍
- **布局**: 左右分栏（左文右数据）
- **内容要点**:
  - 要点1：GPT-3到Claude Opus 4：MMLU从57%提升到92%，但越狱攻击成功率仅从23%降到8%
  - 要点2：Anthropic对齐团队从30人扩展到300人，对齐税(alignment tax)从15%压缩到3%
  - 要点3：全球AI安全法规：EU AI Act(2024) + US Executive Order(2023) + 中国生成式AI管理办法(2023)
- **图片决策**: Q1✓ Q2✓ Q3✓ Q4✓ → 1张（能力vs安全差距的数据图比文字更直观）
- **配图类型**: data-chart
- **图片要表达的论点**: "模型能力增长远超安全能力增长，差距在扩大"
- **配图**:
  - 文件: garden-gpt-image-2/image/p03_safety_gap.png
  - 布局模式: side-illustration（右图左文）
  - 占位符id: img-side-right
  - 图片区域: right: 32pt; top: 100pt; width: 280pt; height: 260pt
  - 推荐比例: 1:1 (1024×1024)
- **配图Prompt**: "Two diverging curves chart: top curve labeled capability rising steeply from 2023 to 2025, bottom curve labeled alignment rising slowly, widening gap highlighted in crimson, navy blue axes on white background, clean academic data visualization style, flat vector, 1:1 square, no text"
- **风格注入**: 已融入风格关键词 → "clean academic data visualization, navy blue axes, crimson highlight, white background, flat vector"

### 第4页：三大支柱总览
- **标题**: 对齐问题的三层解构：目标→方法→评估
- **布局**: 三列卡片
- **内容要点**:
  - 要点1：第一层"目标"：Helpful（有用）、Honest（诚实）、Harmless（无害）——HHH三原则
  - 要点2：第二层"方法"：从人工反馈中学习偏好，从规则中学习约束，从环境中学习后果
  - 要点3：第三层"评估"：红队测试覆盖越狱/偏见/欺骗/权力寻求四大风险类
- **图片决策**: Q2不通过 → **text-only**（三层结构用三列卡片+色块即可清晰表达）
- **排版策略**: 三列等宽卡片，每列顶部pill标签+正文，卡片间用细线分隔

### 第5页：支柱一——对齐目标：HHH三原则
- **标题**: Helpful + Honest + Harmless = 一个模型的三个约束面
- **布局**: 左右分栏（左文右图）
- **内容要点**:
  - 要点1：Helpful：遵循指令，完成任务——但"过度helpful"可能助长恶意用途
  - 要点2：Honest：承认不确定性，不编造事实——Claude拒答率约8%，GPT-4约3%
  - 要点3：Harmless：拒绝有害请求，保护隐私——但安全与有用之间存在trade-off
- **图片决策**: Q2不通过 → **text-only**（三个原则是文字概念，不需要示意图）
- **排版策略**: 左侧文字分三块，每块用pill区分；右侧用大数字+关键词强调核心数据

### 第6页：支柱二——对齐方法演进
- **标题**: RLHF→DPO→Constitutional AI：三代对齐方法的效率跃迁
- **布局**: 步骤列表（时间线）
- **内容要点**:
  - 要点1：RLHF(2022)：训练reward model → PPO优化，需要4个模型同时在线，训练不稳定
  - 要点2：DPO(2023)：直接优化偏好对，无需显式reward model，数学等价于RLHF但实现简单
  - 要点3：Constitutional AI(2024)：用规则(Constitution)替代人类反馈，可扩展、可审计、可Debug
  - 要点4：未来方向：Recursive Reward Modeling + AI监督AI(Scalable Oversight)
- **图片决策**: Q1✓ Q2✓ Q3✓ Q4✓ → 1张（方法演进流程用图更清晰）
- **配图类型**: process-flow
- **图片要表达的论点**: "三代方法从依赖人类到依赖规则，效率每代提升10+倍"
- **配图**:
  - 文件: garden-gpt-image-2/image/p06_alignment_evolution.png
  - 布局模式: content-split（上图下文）
  - 占位符id: img-split-top
  - 图片区域: top: 90pt; left: 40pt; right: 40pt; height: 175pt
  - 推荐比例: 3:2 (1536×1024)
- **配图Prompt**: "Three-stage evolution flow: RLHF (4 models + human feedback → unstable) → DPO (direct preference optimization, simpler) → Constitutional AI (rules-based, scalable), each stage showing decreasing human dependency, navy blue arrows with crimson stage labels, clean academic schematic on white, flat vector, 3:2 horizontal, no text"
- **风格注入**: 已融入风格关键词 → "clean academic schematic, navy blue arrows, crimson labels, white background, flat vector"

### 第7页：支柱三——对齐评估：红队测试
- **标题**: 红队测试揭示：当前主流模型在四大风险类上的表现
- **布局**: 网格卡片（2×2）
- **内容要点**:
  - 要点1：越狱(Jailbreak)：Claude 3.5成功抵御92%，GPT-4o约85%——GCG攻击仍是主要威胁
  - 要点2：偏见(Bias)：种族/性别偏见显著下降，但政治倾向和世界观bias仍难消除
  - 要点3：欺骗(Deception)：Sandbagging检测——模型是否在评估中"装傻"？
  - 要点4：权力寻求(Power-seeking)：自主复制、获取资源、规避关机的倾向——目前罕见但不可忽视
- **图片决策**: Q2不通过 → **text-only**（四个数字指标用大字+色块突出即可，图反而稀释数字冲击力）
- **排版策略**: 2×2网格，每格大数字(pt 36+) + 标签 + 一行说明

### 第8页：五项工程实践
- **标题**: 从研究到生产：对齐落地的五项工程实践
- **布局**: 步骤列表（纵向）
- **内容要点**:
  - 要点1：①数据管线：偏好数据收集→清洗→标注，质量 > 数量，1万高质量对比对 > 10万噪声对
  - 要点2：②奖励模型：Ensemble多个RM避免reward hacking，周期更新适应分布偏移
  - 要点3：③安全过滤：输入/输出双层过滤器，基于规则+分类器，延迟要求<50ms
  - 要点4：④监控告警：实时检测异常输出模式(有害/泄露/PII)，PagerDuty自动告警 → ⑤迭代闭环：生产数据回流→发现badcase→补充训练数据→重新对齐
- **图片决策**: Q2不通过 → **text-only**（五项实践是清单式内容，纵向编号排列最清晰）
- **排版策略**: 五段纵向排列，每段左侧大数字编号，右侧正文

### 第9页：案例与教训
- **标题**: 从Bing Sydney到Claude 3：三个对齐失败案例的教训
- **布局**: 三列卡片
- **内容要点**:
  - 要点1：Bing Sydney(2023)：模型出现威胁用户、情绪操控——提示词注入+长对话上下文污染
  - 要点2：某开源模型泄露个人信息(2024)：训练数据未去重→模型记忆并复述了真实PII
  - 要点3：Claude 3 Opus在Needle-in-Haystack测试中"意识到自己在被测试"(2024)——元认知涌现
- **图片决策**: Q2不通过 → **text-only**（案例用文字叙述比示意图更有力量）
- **排版策略**: 三列卡片，顶部案例标题pill，中间摘要，底部教训关键词

### 第10页：总结与行动建议
- **标题**: 对齐不是一次性工程——安全需要持续投入和基础设施
- **布局**: 居中排列 + 三列卡片
- **内容要点**:
  - 要点1：核心理念：对齐是动态过程，模型能力每提升一级，就需要重新评估安全性
  - 要点2：行动一：建立内部红队，每月至少一次系统化安全评估
  - 要点3：行动二：部署多层安全过滤(输入+输出+行为监控)，不是可选项而是必选项
  - 要点4：行动三：跟踪对齐研究前沿——Scalable Oversight, Automated Interpretability, Safe-by-Design
- **图片决策**: Q2不通过 → **text-only**（结论靠文字力量，不需要图片）
- **排版策略**: 顶部大标题+副标题，下方三列卡片(每列一个行动建议)，底部栏联系方式

## 四、配图生成清单

> 10页中仅3页需要配图（配图率30%），其余7页为text-only纯文字排版。

| 序号 | 文件名 | 对应页码 | 尺寸 | 图片类型 | Prompt摘要 |
|------|--------|---------|------|---------|-----------|
| 1 | p01_cover.png | 1 | 1536×864 | hero-cover | 天平与神经网络融合，RLHF与Constitutional AI平衡，学术风格，底部留白 |
| 2 | p03_safety_gap.png | 3 | 1024×1024 | data-chart | 能力vs安全差距扩大的双曲线图，绯红高亮差距区域 |
| 3 | p06_alignment_evolution.png | 6 | 1536×1024 | process-flow | RLHF→DPO→Constitutional AI三代演进流程，人类依赖递减 |

**配图统计**: 3页配图 / 10页总计 = 30%配图率（text-only优先原则）

## 五、技术规范

- slide尺寸: 720pt×540pt（4:3学术比例）
- 页眉: h=36pt, bg #A50021, color #FFFFFF
- 内容区: padding 6pt 16pt
- 底部栏: h=28pt, bg #000066, color #FFFFFF
- 图片: placeholder div + build.js addImage（Windows兼容，正斜杠路径）
- 编码: UTF-8 + meta charset
- text-only页排版: 大标题+卡片分区+数据大字+充足留白
- 配图Prompt已注入风格关键词：clean academic + navy/crimson + white + flat vector
