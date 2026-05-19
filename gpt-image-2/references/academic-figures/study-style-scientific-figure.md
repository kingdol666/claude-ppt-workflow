# Study Style 学术科研配图模板

本文件用于生成 **Study Style 学术科研配图**——一种跨学科的通用学术视觉风格，灵感来自 Nature/Science 信息图设计语言与大学出版传统。

核心设计哲学：**学术克制 + 暖色调 + 视觉层次**。不是冰冷的工程蓝图，不是花哨的科普插画，也不是暗色背景的技术架构图——而是在学术严谨与视觉优雅之间找到平衡，让任何学科的科研工作者都能在期刊论文和学术答辩中呈现顶刊级配图。

## 设计 DNA（三条原则）

1. **少即是多**：每张图只传达一个核心论点。删掉一切不服务于这个论点的视觉元素
2. **色彩编码信息**：深蓝 = 主结构/主论点，琥珀金 = 强调/转折/关键差异，暖灰 = 辅助/背景。观众在 3 秒内就能通过颜色理解信息层级
3. **留白是呼吸**：画面 30-35% 为留白，让科学内容有"被凝视的空间"

## 适用范围（全学科通用）

| 学科大类 | 典型配图场景 |
|---------|-------------|
| **自然科学**（物理/化学/材料/地学） | 晶体结构、反应路径、相图、能带图、TGA/XRD 曲线、实验装置示意 |
| **生命科学/医学** | 信号通路、分子机制、细胞互作、临床试验流程、药物筛选 pipeline、解剖示意 |
| **工程/计算机** | 系统架构、算法流程、方法对比、消融实验、pipeline 总览（替代深色技术图时） |
| **社会科学/经济/管理** | 理论框架、因果模型、政策路径、制度演化、文献综述概念图 |
| **环境/生态/农学** | 生态系统模型、碳循环、物质流分析、气候变化情景对比、生命周期评价 |
| **人文/教育** | 理论演进时间轴、概念关系图、方法论对比、知识体系框架 |
| **交叉学科/任何** | Graphical Abstract、答辩首页总览图、方法对比、关键数据可视化 |

一句话：**只要你想让配图看起来像顶刊论文里的图，就用这个模板。**

## 何时使用

- 用户提到「学术配图」「论文图」「答辩图」「科研插图」「期刊图」「机制图」
- 用户要求「学术风格」「研究风格」「study style」「Nature 期刊风」「出版物配图」
- 用户需要为论文/答辩/开题/结题/基金申请准备配图
- 用户对现有配图不满意，要求「更学术」「更专业」「更期刊」「更好看」

**不要使用**（应路由到其他模板）：

| 用户想要的 | 路由到 |
|-----------|--------|
| 科普插画/教学漫画/手绘风 | `infographics/` 或 `scenes-and-illustrations/` |
| 品牌海报/产品宣传/营销素材 | `poster-and-campaigns/` |
| UI 界面/APP 截图/web mockup | `ui-mockups/` |
| 深色背景系统架构/网络拓扑 | `technical-diagrams/` |
| 神经网络架构图（layer 块+tensor shape） | `neural-network-architecture.md` |
| 多方法 qualitative 对比网格 | `qualitative-comparison-grid.md` |

## 缺失信息优先提问顺序

按优先级依次确认（缺什么问什么，全部不缺直接进入生成）：

1. **核心论点**：这张图要论证的"一个观点"是什么？（一句话，≤20 字）
2. **布局类型**：7 种变体中选一（见下），不确定时根据内容推荐
3. **关键元素**：图中必须出现的对象/数据/步骤/概念有哪些？（列出清单）
4. **标注语言**：中文 / 英文 / 双语？
5. **比例**：默认 16:9（1536×864）；也支持 4:3、3:1 宽幅、1:1 方形
6. **特殊强调**：是否有需要特别高亮/对比的元素？
7. **学科语境**（可选）：告知学科背景可帮助选择更贴切的视觉隐喻

---

## 色彩与材质规范

### 主色板（所有学科通用）

| 角色 | 色值 | 用途 |
|------|------|------|
| 页面底色 | `#FAF9F6` | 全局背景（暖纸白——比纯白温和，减少视觉疲劳） |
| 第一主色 | `#1B2A4A` | 主结构、节点、曲线、轮廓、标题（占画面 40-50%） |
| 强调点缀 | `#C8963E` | 箭头、关键数据、高亮差异、装饰线（占画面 10-15%） |
| 正文色 | `#1E1D1A` | 标签文字、小号标注 |
| 辅助灰 | `#6B6760` | 脚注、数据来源、次要标签 |
| 卡片底色 | `#F2F0EB` | 内容区块底色（浅暖灰） |
| 重点底色 | `#FEF9F0` | 核心论点/结论高亮底色（暖象牙白） |
| 分割线 | `#E5E0D8` | 网格线、表格线、面板分割 |

### 扩展色板（≥3 个系列时启用）

| 色值 | 角色 |
|------|------|
| `#3A5A80` | 第三系列（中蓝） |
| `#D4A853` | 第四系列（中琥珀） |
| `#8FA3B5` | 第五系列/背景辅助（灰蓝） |
| `#5A7A5A` | 第六系列（低饱和绿——生命科学/生态方向可作第二主色替代） |

### 色彩使用铁律

- 深蓝 #1B2A4A 永远第一、琥珀金 #C8963E 永远第二——不交换角色
- 同一张图中 ≤4 种颜色（不包括底色和灰阶）
- 永远不用高饱和原色（正红 #FF0000、正蓝 #0000FF、正绿 #00FF00）
- 如果学科有约定俗成的颜色编码（如医学的动脉红/静脉蓝），可以用但需降低饱和度

### 线型规范

- 主线/主节点边框：1.5-2pt
- 连接线/箭头：1-1.5pt
- 网格线/辅助线：0.5-1pt
- 琥珀装饰短线（rule）：2.5pt，宽度 36-64pt
- 虚线：仅用于表达"未完成/未来/假设"状态

---

## 字体规范

- **西文标注、数字、轴标签**：Georgia Bold（标题级）/ Georgia Regular（正文级）
- **中文标题**（如需中文标注）：思源宋体 / 宋体 Bold
- **字号层级**：图主标题 14-18pt → 次级标注 10-12pt → 脚注/来源 8-9pt
- **特大数字**（Data Spotlight 模式）：Georgia Bold 60-150pt
- **绝对禁止**：Arial、Helvetica、Comic Sans、等宽代码字体
- **文字最少化原则**：标注用关键词而非完整句子。图注移到图外（caption），不堆在画面里

---

## 7 种布局变体（跨学科通用）

---

### 变体 1：Parallel Process Flow（并行流程对比）

**核心用途**：展示 ≥3 条并行的方法路线/反应路径/策略方案/处理流程，每条 2-4 阶段。

**典型学科场景**：

| 学科 | 例子 |
|------|------|
| 材料/化学 | 五种燃烧合成路线对比、催化剂制备方法并排 |
| 生命科学 | 三种药物筛选 pipeline 对比、不同治疗方案路径 |
| 工程/CS | 多种模型训练策略对比、不同架构推理流程 |
| 环境科学 | 不同污水处理工艺路线、碳捕集技术路线对比 |
| 社会科学 | 多种政策干预路径对比、不同教育改革方案 |

**布局**：

- 水平排列 N 列（N=3-6），每列 = 一条完整路线
- 每列内部纵向 2-4 个阶段节点，向下箭头连接
- 每列用 1pt 细线框包围（#E5E0D8）
- 所有列共享底部总结条（可选）

**颜色分配**：

- 所有节点：统一 #1B2A4A 填充（当前阶段）或 #F2F0EB + #1B2A4A 边框（预备阶段）
- 箭头：统一 #C8963E
- 终点/关键产物节点：略大，或加 #C8963E 边框
- 需突出某条路线：该列底色用 #FEF9F0

**提示词框架**：

```
[N] parallel process routes arranged horizontally, each as a vertical column with [M] sequential stages connected by downward amber arrows [#C8963E].
Route 1: [stage1] → [stage2] → [stage3].
Route 2: [stage1] → [stage2] → [stage3].
[...repeat for each route...]
Each route column enclosed in thin bounding box [1pt #E5E0D8].
All stage nodes in navy blue [#1B2A4A], arrows in warm amber [#C8963E], warm paper-white background [#FAF9F6].
Clean flat 2D vector scientific illustration, precise 1pt stroke weights, Georgia-style minimal labels, no rounded corners no shadows no gradients, Nature journal publication quality, 16:9 1536x864.
```

---

### 变体 2：Split Comparison（左右二元对比）

**核心用途**：A vs B 的严格 50:50 对比——两组方法、两种条件、两类结果、正面 vs 负面。

**典型学科场景**：

| 学科 | 例子 |
|------|------|
| 材料 | 0D 纳米颗粒(安全) vs 1D 纳米线(毒性)、β-SiC vs α-SiC |
| 医学 | 治疗组 vs 对照组、术前 vs 术后、野生型 vs 突变型 |
| 工程 | 传统方法 vs 新方法、CPU vs GPU 推理、有无优化的消融对比 |
| 经济 | 干预前 vs 干预后、实验组 vs 控制组、两个政策方案对比 |
| 生态 | 退化前 vs 恢复后、保护区 vs 非保护区 |

**布局**：

- 严格 50:50 左右分屏，中央 1pt #E5E0D8 竖线
- 左侧 #1B2A4A 色系，右侧 #C8963E 色系
- 每侧：标题标签 + 核心视觉元素 + 2-4 条要点
- 正面属性用绿色 ✓，负面/警示属性用红色 ⚠

**颜色分配**：

- 左侧面板：深蓝边框、深蓝标题标签（白字）、#F2F0EB 卡片底
- 右侧面板：琥珀边框、琥珀标题标签、#FEF9F0 卡片底
- 对比强度可通过配色深浅调整（强烈对比=左深蓝右琥珀；温和对比=两侧均用浅底仅边框色不同）

**提示词框架**：

```
Split comparison scientific diagram with exactly 50-50 left-right division and sharp center divider line [1pt #E5E0D8].
LEFT HALF [left_label]: [visual description of left side content], navy blue [#1B2A4A] color theme, [key findings with green checkmarks if positive].
RIGHT HALF [right_label]: [visual description of right side content], warm amber [#C8963E] color theme, [key findings with red warning marks if negative].
Warm paper-white background [#FAF9F6]. Clean flat 2D vector, precise 1pt stroke lines, Georgia-style labels, no rounded corners no shadows no gradients, Nature journal publication quality, 16:9 1536x864.
```

---

### 变体 3：Structure / Mechanism Diagram（结构 / 机理图）

**核心用途**：展示"某个东西长什么样"或"某个过程如何发生"——从分子结构到生态系统模型。

**典型学科场景**：

| 学科 | 例子 |
|------|------|
| 物理/化学 | 晶体结构、分子构型、能带结构、相转变示意 |
| 生命科学 | 蛋白质结构域、信号通路、细胞器互作、突触结构 |
| 材料 | 多型体堆垛、缺陷类型、界面结构、孔道形貌 |
| 地学 | 地层剖面、矿物结构、板块构造示意 |
| 工程 | 器件结构、传感器原理、装置剖面图 |
| 社科 | 概念层级关系、理论模型的空间表达 |

**布局子类型**：

- **中心辐射**：1 个核心对象居中，4-6 个分支环绕（适合"整体→部分"关系）
- **并排对比**：2-4 个结构变体水平排列（适合展示同一对象的不同形态/构型）
- **层次嵌套**：外层→内层矩形递进（适合"宏观→微观"或"系统→组件"）

**颜色分配**：

- 核心/中心元素：#1B2A4A 填充 + 白色标注文字
- 分支/子结构：#F2F0EB + #1B2A4A 边框
- 关键差异/活性位点/功能区域：#C8963E 高亮
- 连接线/指示线：1pt #C8963E
- Callout 引出线：1pt #6B6760

**提示词框架**：

```
Scientific structure or mechanism diagram showing [central concept].
[Layout: center-radiating with N branches / side-by-side comparison of M variants / nested hierarchical layers from outer to inner].
Primary structural elements in navy blue [#1B2A4A], key functional sites or differences highlighted in amber gold [#C8963E].
Thin leader lines [1pt #6B6760] connect callout annotations to structural features.
Clean warm white background, precise rendering in flat 2D vector style, thin consistent line weights 1pt, Georgia-style labels, no 3D perspective no shadows no photographic textures, Nature journal figure quality, [aspect ratio].
```

---

### 变体 4：Data Visualization（数据图表）

**核心用途**：Publication-ready 的定量数据可视化——曲线、柱状、散点、热力图。不是 Excel 默认图表，而是期刊级别的数据呈现。

**典型学科场景**：

| 学科 | 例子 |
|------|------|
| 材料/化学 | TGA 曲线、XRD 谱图、应力-应变曲线、Nyquist 图 |
| 物理 | 能带图、I-V 曲线、相图、色散关系 |
| 生命科学 | 剂量-反应曲线、生长曲线、存活率、ELISA 标准曲线 |
| 医学/公卫 | Kaplan-Meier 生存曲线、ROC 曲线、森林图 |
| 经济/社科 | 时间序列趋势、回归散点图、基尼系数对比 |
| 环境 | 温度/CO₂ 变化曲线、污染物浓度时序 |

**布局**：

- 图表区占画面 70-80%
- 可并排 2-3 个子图（共用轴或独立轴）
- 网格线极细（0.5pt #E5E0D8），不抢数据焦点
- 轴标签在图区外侧，保持数据区干净

**颜色分配**：

- 第一数据系列：#1B2A4A
- 第二数据系列：#C8963E
- 第三、四系列：#3A5A80、#D4A853
- 关键转折点/阈值标注：#C8963E 圆点或三角标记
- 误差棒/置信区间：对应系列颜色，降低不透明度

**提示词框架**：

```
Publication-ready scientific [chart type: line plot / bar chart / scatter plot / heatmap] showing [data description].
Primary data series in navy blue [#1B2A4A], secondary series in amber gold [#C8963E].
Key [transitions/thresholds/peaks] annotated with amber markers.
Thin grid lines [0.5pt #E5E0D8] on warm paper-white background [#FAF9F6].
Georgia-style axis labels, clean scientific data visualization, flat 2D vector style, no 3D effects no chartjunk, Nature journal figure quality, [aspect ratio], no title text inside figure area.
```

---

### 变体 5：Methodology Contrast（方法论对比）

**核心用途**：两种对立或互补的方法论/策略/范式的深度对比——不只是并列，而是展示从起点到终点的完整逻辑链条差异。

**与其他变体的区别**：变体 2（Split Comparison）是"属性对比"，本变体是"过程对比"——重点展示"怎么做"以及"为什么结果不同"。

**典型学科场景**：

| 学科 | 例子 |
|------|------|
| 材料 | Top-down(物理研磨) vs Bottom-up(化学合成) |
| 生命科学 | 体内实验 vs 体外实验、CRISPR vs RNAi 敲低 |
| CS/AI | 监督学习 vs 自监督学习、判别模型 vs 生成模型 |
| 医学 | 开放手术 vs 微创手术、传统药物 vs 基因治疗 |
| 社科 | 定量研究 vs 定性研究、纵向追踪 vs 横截面调查 |
| 经济 | 需求侧政策 vs 供给侧政策 |

**布局**：

- 严格 50:50 左右分屏
- **左侧方法 A**：起点(原料/输入) → 过程(核心步骤) → 终点(产物/输出) + 优缺点 callout
- **右侧方法 B**：同样的起点→过程→终点结构，但视觉强调关键差异点
- 每侧顶部：特大号关键数字（60-80pt Georgia Bold）作为视觉锚点
- 每侧底部：callout 框列出优缺点或适用范围

**颜色分配**：

- 左侧：#1B2A4A 色系
- 右侧：#C8963E 色系
- Callout 框：左 #F2F0EB / 右 #FEF9F0
- 缺点/局限用红色小 ✗ 标记

**提示词框架**：

```
Split methodology comparison diagram contrasting two approaches for [task/topic].
LEFT [Method A name]: [starting point] → [core process steps with key mechanism] → [outcome with metric], callout boxes listing [advantages] with green checks and [limitations] with red X marks, giant key metric number in Georgia Bold 60pt, navy blue [#1B2A4A] color theme.
RIGHT [Method B name]: [starting point] → [core process steps with key mechanism] → [outcome with metric], callout boxes listing [advantages] and [limitations], giant key metric number in Georgia Bold 60pt, warm amber [#C8963E] color theme.
Sharp center divider [1pt #E5E0D8]. Warm paper-white background [#FAF9F6]. Clean flat 2D vector, precise 1pt strokes, Georgia-style labels, no rounded corners no shadows no gradients, Nature journal quality, 16:9 1536x864.
```

---

### 变体 6：Conceptual Framework（概念框架图）

**核心用途**：展示抽象概念之间的关系——理论模型、分析框架、分类体系、多因素影响模型。这是社会科学、管理学、教育学的核心配图类型。

**典型学科场景**：

| 学科 | 例子 |
|------|------|
| 社科/管理 | 理论框架模型、影响因素体系、组织行为模型 |
| 教育 | 学习理论框架、课程设计体系、评估模型 |
| 公共政策 | 政策分析框架、利益相关者地图、治理模型 |
| 经济 | 供需模型、市场结构、博弈树 |
| 生态 | 生态系统服务框架、DPSIR 模型、SDG 关联图 |
| 医学/公卫 | 健康决定因素模型、社会生态模型、疾病负担框架 |
| 任何学科 | 文献综述概念图、研究假设模型 |

**布局子类型**：

- **金字塔/层级**：底层基础→顶层应用（如 Maslow 需求层次）
- **同心环**：核心概念→外围影响（如社会生态模型）
- **流程-反馈环**：因果关系链 + 反馈回路（如系统动力学模型）
- **矩阵/2×2**：两个维度交叉产生四种类型（如 SWOT、BCG 矩阵）

**颜色分配**：

- 核心概念：#1B2A4A 填充 + 白字
- 中间层/次级概念：#F2F0EB + #1B2A4A 边框
- 外围/次要因素：#FEF9F0 + #C8963E 边框
- 因果关系箭头：1pt #C8963E（正向）/ 1pt #6B6760 虚线（负向/抑制）
- 反馈环：1.5pt #C8963E 弧线箭头

**提示词框架**：

```
Academic conceptual framework diagram showing [theory/model name].
[Layout: hierarchical pyramid with N levels / concentric rings from core to periphery / causal flow diagram with feedback loops / 2x2 matrix with axes labels].
Core concepts in navy blue [#1B2A4A], secondary elements in warm gray [#F2F0EB] with navy borders, key relationships shown with amber gold arrows [#C8963E].
Thin connecting lines [1pt], Georgia-style concept labels (5-8 words per node), generous whitespace between elements.
Warm paper-white background [#FAF9F6]. Clean flat 2D vector, no rounded corners no shadows no gradients, suitable for university press monographs and academic journal theory figures, [aspect ratio].
```

---

### 变体 7：Evolutionary Timeline / Milestone（演化时间轴 / 里程碑）

**核心用途**：展示技术演进、理论发展、研究里程碑、项目阶段、历史进程。

**典型学科场景**：

| 学科 | 例子 |
|------|------|
| 科技史 | 某项技术的发展脉络（如碳热还原从 Acheson 1893 到微波加热） |
| 医学 | 药物研发里程碑（从靶点发现到 FDA 批准） |
| 生命科学 | 模式生物研究历程、基因编辑技术演进 |
| 社科 | 理论流派演变、政策法规演变 |
| 工程 | 技术成熟度 TRL 递进、产品迭代版本 |
| 任何学科 | 你的研究领域在过去 20 年经历了什么 |

**布局**：

- 一条水平主时间轴（1.5pt #E5E0D8）贯穿画面中部
- 节点圆（8pt #C8963E）标记关键事件，重大事件放大至 14pt 并用 #1B2A4A 填充
- 上方标注年份/时期（Georgia Bold），下方标注事件描述（关键词）
- 节点间距可以不均匀——密集段 = 快速发展期，稀疏段 = 缓慢演进期
- 当前/未来节点：虚线框 + #C8963E 边框（表示"未完成"）

**颜色分配**：

- 时间主轴：#E5E0D8
- 历史/已完成节点：#1B2A4A 填充
- 转折/关键节点：#C8963E 填充（放大）
- 未来/未完成节点：虚线框 #C8963E
- 不同阶段可以用底色条区分（#F2F0EB / #FEF9F0 交替）

**提示词框架**：

```
Academic timeline or milestone diagram showing the evolution of [topic] from [start_period] to [end_period or present].
Horizontal time axis [1.5pt #E5E0D8] with [N] milestone nodes.
Key milestones: [year1: event description], [year2: event description], [year3: event description], ...
Critical breakthrough nodes enlarged and filled in amber gold [#C8963E], regular nodes in navy blue [#1B2A4A].
Future/projected milestones shown with dashed amber border.
Year labels above axis in Georgia Bold, event keywords below axis in Georgia Regular [9pt].
Distinct era/phase background bands in alternating [#F2F0EB] and [#FEF9F0].
Warm paper-white background [#FAF9F6]. Clean flat 2D vector, precise 1pt strokes, no rounded corners no shadows no gradients, Nature journal quality, 16:9 1536x864.
```

---

## 变体选择决策树

拿到一个配图需求时，按以下顺序判断：

```
这张图要表达什么？

├─ 多个方法/路线的并排比较？
│  └─ 比较的是"过程/步骤"？ → 变体 1：Parallel Process Flow
│  └─ 比较的是"方法论逻辑"？ → 变体 5：Methodology Contrast
│
├─ 两个东西的对比？
│  └─ 对比的是"属性/结果"？ → 变体 2：Split Comparison
│  └─ 对比的是"怎么做"？   → 变体 5：Methodology Contrast
│
├─ 一个东西的结构/机理？
│  └─ 物理结构/分子/解剖？ → 变体 3：Structure/Mechanism Diagram
│  └─ 抽象概念/理论关系？ → 变体 6：Conceptual Framework
│
├─ 数据趋势/定量结果？
│  └─ 需要坐标轴/网格？   → 变体 4：Data Visualization
│
├─ 时间维度的演进/发展？
│  └─ 有时间先后顺序？   → 变体 7：Evolutionary Timeline
│
└─ 以上都不是？
   └─ 用 `scientific-schematic.md`（最通用、自由度高）
```

---

## 通用提示词后缀（所有变体共用）

在具体内容描述后，追加此后缀确保风格一致性：

```
Warm paper-white background #FAF9F6. Clean flat 2D vector scientific illustration, precise 1-2pt consistent stroke weights, Georgia-style serif labels, color palette of deep navy blue #1B2A4A primary and warm amber gold #C8963E accent with warm gray #E5E0D8 grid lines. Absolutely no rounded corners, no drop shadows, no gradients, no photographic textures, no 3D perspective effects. Publication-quality suitable for Nature Science Cell journal figures and university press monographs.
```

---

## 学科微调指南

在保持核心风格不变的前提下，可按学科特点微调：

| 学科 | 微调建议 |
|------|---------|
| **生命科学/医学** | 可引入低饱和绿 `#5A7A5A` 作为第二辅助色（表示"生命/健康/显著"）；信号通路图可适当增加节点数（6-10 个） |
| **物理/天文** | 可引入深紫 `#4A3A6A` 替代琥珀金作为第二主色（表示"能量/辐射/高能"）；偏好更极简的标注 |
| **社会科学/管理** | 概念框架图（变体 6）应作为首选；文字标注可比自然科学配图多 20-30%；可接受简单的图标符号辅助 |
| **地学/环境** | 可引入低饱和绿 `#5A7A5A` 和浅褐 `#A08060` 作为扩展色；地图/空间示意优先用变体 3 |
| **计算机/AI** | 如果用户要"学术论文配图"（非工程架构图），用本模板变体 1 或 5；如果用户要"系统部署架构"→ 路由到 `technical-diagrams/` |
| **人文** | 时间轴（变体 7）和概念框架（变体 6）最常用；标注可更叙事化 |

> **关键原则：学科微调只调整第二主色和标注风格，不动第一主色 #1B2A4A、底色 #FAF9F6 和禁止规则。**

---

## 反模式（绝对禁止）

| ❌ 禁止 | ✅ 应该 |
|---------|--------|
| 纯白 #FFFFFF 背景 | 暖纸白 #FAF9F6 背景 |
| 圆角 `border-radius` | 直角边框 |
| 投影 `box-shadow` / `drop-shadow` | 平面无阴影 |
| 渐变 `linear-gradient` / `radial-gradient` | 纯色填充 |
| 照片纹理 / 3D 渲染 / 拟物化 | 平面 2D 矢量线条 |
| 高饱和原色（#FF0000, #0000FF, #00FF00） | 低饱和学术色板 |
| Arial / Helvetica / 等宽字体 | Georgia 衬线 / 思源宋体 |
| 星星、火花、光晕、阴影等装饰 | 数据表达必需的视觉元素即可 |
| 粗黑边框 >3pt | 1-2pt 均匀细线 |
| 画面留白 <20% | 留白 30-35%，让内容自己说话 |
| 虚构定量数据（数值/等值线/色标） | 只标注真实数据，不确定的留白 |

---

## 已实战验证的案例

本模板的风格参数和提示词框架已通过以下真实配图验证（SiC 纳米颗粒学术汇报 PPT）：

| 图片 | 变体 | 效果 |
|------|------|------|
| 封面 SiC 四面体结构 | 变体 3（结构图） | 建立学术基调 |
| 3C/4H/6H 多型体堆垛对比 | 变体 3（并排对比子型） | 晶体学信息清晰传达 |
| TGA 热重分析曲线 | 变体 4（数据图表） | 800°C 转折点一目了然 |
| 能带图 + 掺杂缺陷能级 | 变体 4（数据图表） | 带隙对比直观 |
| 五种燃烧合成路线并行 | 变体 1（并行流程） | 复杂信息结构化 |
| 0D vs 1D 毒性对比 | 变体 2（左右对比） | 安全/危险视觉冲击 |
| 物理研磨 vs 机械合金化 | 变体 5（方法对比） | 26nm vs 7nm 数据锚点 |

---

## 与其他模板的关系

| 场景 | 用哪个模板 |
|------|-----------|
| **任何学科的学术期刊/答辩配图** | **本模板 ← 首选** |
| CS/CV/ML 方法 pipeline 图（特定 layer 块格式） | `method-pipeline-overview.md` |
| 神经网络架构图（tensor shape 标注） | `neural-network-architecture.md` |
| 通用科学装置/实验系统示意（极高自由度） | `scientific-schematic.md` |
| 多工况/多条件严格并排结果对比（panel 间统一） | `multi-condition-comparison.md` |
| 多方法 qualitative 对比网格（行=样本, 列=方法） | `qualitative-comparison-grid.md` |
| 期刊投稿 Graphical Abstract（4 段式/中心展开等） | `graphical-abstract.md` |
| 开题/答辩首页研究总览（上中下三层+五模块） | `research-overview-poster.md` |
| 深色背景系统架构/网络拓扑/时序图 | `technical-diagrams/` |
| 科普信息图/手绘风/便当格 | `infographics/` |
