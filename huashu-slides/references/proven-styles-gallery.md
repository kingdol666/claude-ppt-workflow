# Proven Styles Gallery: 19 Tested Visual Styles for AI Slides + 6 Professional Editorial Styles

> 实战验证的风格画廊。基于2026-02-08小红书介绍PPT项目，同一页slide（种草链路：发现→种草→搜索→购买）在17种风格下全部一次生成成功。
> 2026-02-09蕴煜AI培训项目验证Neo-Brutalism风格（Day1 67页 + Day2 64页全部HTML渲染成功）。
> 样例图片见 `assets/style-samples/` 目录。

## 风格推荐策略

**核心发现：插画/漫画类风格的AI生成效果远好于「专业极简」类风格。**

原因分析：
- 漫画/插画风格有明确的视觉语言（线条、角色、色块），AI可以充分发挥
- 极简风格（暗色底+发光文字+大量留白）缺乏视觉元素，生成出来「空」且「平」
- 有角色/场景的风格信息传达更生动，观众更容易记住

### 推荐优先级

**第一梯队（强烈推荐，效果极好）：**

| 风格 | 适合场景 | 核心特点 |
|------|---------|---------|
| Snoopy温暖漫画 | 品牌介绍、教育、个人IP | 温暖治愈，角色引导，信息量充足 |
| 学習漫画 Manga | 教程、培训、知识分享 | 角色反应驱动理解，趣味性强 |
| Ligne Claire清线 | 产品说明、流程解释 | 信息清晰度最高，面板叙事 |
| Neo-Pop新波普 | 年轻品牌、社交平台、活动 | 潮流感强，视觉冲击力大 |

**第二梯队（推荐，特定场景效果好）：**

| 风格 | 适合场景 | 核心特点 |
|------|---------|---------|
| Neo-Brutalism新粗野主义 | 企业培训、线下分享、信息密集 | 粗边框+色块+大字，远距离可读 |
| xkcd白板手绘 | 技术分享、极客受众、课堂 | 极简幽默，复杂概念秒懂 |
| The Oatmeal信息图漫画 | 科普、社交传播、内部培训 | 搞笑夸张，信息密度适中 |
| 苏联构成主义 | campaign、动员、品牌宣言 | 力量感强，辨识度极高 |
| 敦煌壁画 | 国风品牌、文化项目、高端场合 | 东方美学，庄重诗意 |
| 浮世绘 | 日本/东方市场、跨境品牌 | 浪潮隐喻天然表达递进 |

**第三梯队（可用，需要合适场景）：**

| 风格 | 适合场景 | 核心特点 |
|------|---------|---------|
| 温暖叙事 | 用户故事、品牌故事 | 人物场景生动自然 |
| 孔版印刷Risograph | 独立品牌、创意行业、音乐 | 双色叠印独特美学 |
| 等轴测Isometric | 科技产品、SaaS流程 | 2.5D游戏世界感 |
| Bauhaus包豪斯 | 设计行业、建筑、教育 | 几何=逻辑 |
| 工程蓝图Blueprint | 技术架构、工程方案 | 精密机器隐喻 |
| 复古广告Vintage Ad | 消费品、零售、怀旧 | 乐观复古好感 |
| 达达拼贴Collage | 创意行业、广告、破冰 | 反规则，最另类 |
| 像素画Pixel Art | 游戏、年轻群体、gamification | RPG任务隐喻 |

### 按主题自动推荐

在Step 2推荐3个风格时，优先从下表的推荐池中选：

| 主题类型 | 第一推荐 | 第二推荐 | 第三推荐 |
|---------|---------|---------|---------|
| 品牌/产品介绍 | Snoopy温暖漫画 | Neo-Pop新波普 | 浮世绘/敦煌（东方品牌） |
| 教育/培训 | Neo-Brutalism | 学習漫画 | Snoopy温暖漫画 |
| 技术分享 | xkcd白板 | Neo-Brutalism | Ligne Claire |
| 数据报告 | **NYT Magazine Editorial** ★ | **Pentagram Editorial** | Ligne Claire |
| 年轻受众 | Neo-Pop | 像素画 | 孔版印刷 |
| 创意/艺术 | 达达拼贴 | 孔版印刷 | The Oatmeal |
| 国风/东方 | 敦煌壁画 | 浮世绘 | 温暖叙事 |
| 正式商务 | **NYT Magazine Editorial** ★ | **Pentagram Editorial** | **Build Luxury Minimal** |
| 行业分析/咨询 | **Pentagram Editorial** | **NYT Magazine Editorial** ★ | **Fathom Data** |
| 学术答辩/研究汇报 | **Study Style** ★ | SMG学术报告 | NYT Magazine Editorial |
| 培训课件/教材 | Neo-Brutalism | **Müller-Brockmann Grid** | 学習漫画 |
| 教学课件/课程设计 | **Study Style** ★ | Müller-Brockmann Grid | Neo-Brutalism |
| 投资/融资路演 | **Build Luxury Minimal** | **NYT Magazine Editorial** ★ | **Pentagram Editorial** |
| 产品发布/keynote | 苏联构成主义 | Neo-Pop | Neo-Brutalism |
| 内部分享 | Neo-Brutalism | The Oatmeal | xkcd白板 |

---

## 第一梯队详细参考

### 1. Snoopy温暖漫画 (Warm Comic Strip)

详细指南见 → `proven-styles-snoopy.md`

**快速参考：**
- 视觉参考：Peanuts / Charles Schulz
- 背景：暖米色(#FFF8E8) | 墨线：暖深色(#333333) | 强调：天蓝(#87CEEB) + 草绿(#8FBC8F) + 日落橙(#F4A460)
- 核心元素：大圆头小身体角色 + 锯齿草地线 + speech bubble + 极简背景
- 关键：始终指定"NOT Snoopy or Charlie Brown — an original character with Peanuts proportions"

### 2. 学習漫画 Manga Educational

**Base Style已在prompt-templates.md中。**

**实测关键发现：**
- 角色反应驱动学习——惊讶脸、闪光效果让重点「活」起来
- 3-5面板布局最佳，太多面板会拥挤
- 速度线、星光等漫画特效增强信息优先级
- 对话泡是天然的信息容器

### 3. Ligne Claire 清线漫画

**Base Style已在prompt-templates.md中。**

**实测关键发现：**
- 信息清晰度最高——均匀线条+平涂色块=零视觉噪音
- 2-4面板按需分配，不必强制四格
- 适合需要精确传达信息的场景
- 缺点：情感张力较弱，不如Snoopy温暖

### 4. Neo-Pop Magazine 新波普杂志

**Base Style已在prompt-templates.md中。**

**实测关键发现：**
- 字体大小对比(10:1)是核心——标题占据50%画面
- 色块分区帮助信息组织
- 注意：prompt中避免出现字号数字（如20pt），会被当做文字渲染

---

## 第二梯队详细参考

### 5. xkcd白板手绘 (Whiteboard Sketch)

**Base Style已在prompt-templates.md中。适合极客受众。**

### 6. The Oatmeal信息图漫画

**配色：** 浅灰白(#F8F8F8) + 亮橙(#FF6B35) + 深灰(#333333) + 品牌红(#FF2442)
**核心：** 大头角色极度夸张表情 + 粗线条手绘风 + 信息图式数据

### 7. 苏联构成主义 (Soviet Constructivism)

**配色：** 革命红(#CC0000) 40% + 黑(#1A1A1A) 25% + 米白(#F5E6D3) 30%
**核心prompt要素：**
- 对角线楔形从左下到右上——核心视觉元素
- 所有文字旋转15-30度——没有水平线
- 几何形状代表不同步骤，从小到大（视觉crescendo）
- NO gradients，纯色填充+锐利边缘
- 三色限定——限制就是力量

### 8. 敦煌壁画 (Dunhuang Mural)

**配色：** 赭石底(#D4A574) + 石青(#2E86AB) + 朱砂(#C53D43) + 石绿(#5DAE8B) + 金(#C4A35A)
**核心prompt要素：**
- 卷轴叙事从左到右
- 飞天飘带贯穿四阶段
- 受敦煌飞天启发的优雅人物（NOT直接佛教形象）
- 祥云、莲花、金箔边框
- 矿物质颜料感——略哑光，不数码亮

### 9. 浮世绘 (Ukiyo-e)

**配色：** 和纸米白(#F5F0E1) + 靛蓝(#1B4B7A) + 朱红(#C53D43) + 金(#C4A35A)
**核心prompt要素：**
- 浪潮隐喻：涟漪→涌浪→巨浪→破浪（对应4步）
- 浮世绘cartouche标签
- 日式云纹装饰
- 木版画质感——平涂无渐变

---

## 第三梯队详细参考

### 10. 温暖叙事 (Warm Narrative)

**配色：** 暖奶油(#FDF6EC) + 深灰(#3D3D3D) + 珊瑚(#E17055)
**核心：** 暖色人物插画 + 生活场景 + 最有「人情味」

### 11. 孔版印刷 (Risograph)

**配色：** 纸色(#FAF3E0) + 荧光粉(#FF6B9D) + 蓝(#0077B6) → 叠印紫(#6B3FA0)
**核心：** 严格双色叠印 + 套色错位2-3px + 半色调网点 + 粗糙纸感

### 12. 等轴测 (Isometric)

**配色：** 浅灰蓝(#DDE1E7) + 薰衣草/薄荷绿/珊瑚/柔黄 各平台一色
**核心：** 2.5D视角 + 4个递升平台 + 小人物走楼梯 + Monument Valley美学

### 13. Bauhaus包豪斯

**配色：** 纸白(#FAFAFA) + 红(#E53935) + 蓝(#1E88E5) + 黄(#FDD835) + 黑(#212121)
**核心：** 圆/三角/方/星代表4步 + 色彩有心理学意义 + 形式跟随功能

### 14. 工程蓝图 (Blueprint)

**配色：** 蓝图蓝(#1B3A5C) 75% + 白线(#FFFFFF) 20% + 红标注(#FF2442) 5%
**核心：** 白色线条图on深蓝底 + 工程方格纸网格 + 尺寸标注线 + 技术标题栏

### 15. 复古广告 (1950s Vintage Ad)

**配色：** 奶油白(#FFF8E7) + 复古红(#C0392B) + 薄荷绿(#1ABC9C) + 暖棕金(#8B6914)
**核心：** 乐观美式插画 + 半色调网点 + 复古丝带横幅 + 美好生活叙事

### 16. 达达拼贴 (Dada Collage)

**配色：** 无固定——混搭就是风格。纸白(#F5F5F5) + 墨黑 + 品牌红 + 胶带黄(#FFEAA7) + 随机彩色
**核心：** 撕纸碎片 + 混搭字体+角度 + 胶带别针 + 有序的混乱 + 橡皮印章数据

### 17. 像素画RPG (Pixel Art)

**配色：** 16-bit调色板。天空蓝 + 草地绿(#4CAF50) + UI深蓝(#1A237E) + 金(#FFD700)
**核心：** 横版RPG世界地图 + 像素角色4个区域 + RPG进度条 + 文字框 + QUEST隐喻

### 18. Neo-Brutalism 新粗野主义

**视觉参考：** Gumroad官网、Figma社区模板、小红书官方PPT、Figma品牌设计
**验证项目：** 2026-02-09 蕴煜AI培训项目（Day1 67页 + Day2 64页全部HTML渲染成功）

**配色：** 奶油(#F5E6D3) 40% + 革命红(#FF3B4F) 25% + 金黄(#FFD700) 20% + 深黑(#1A1A1A) 15%
**配色原则：** 高对比原色搭配——暖色底+强调色块+黑色边框，无渐变

**核心prompt要素：**

1. **粗黑边框** (CSS: `border: 4-6px solid #1A1A1A`)
   - 所有重要元素都有粗黑边框
   - 边框宽度4-6px，绝不细于3px
   - 边框必须完整，不能断裂或缺失

2. **高饱和色块分区**
   - 色块之间边界清晰，无模糊过渡
   - 每个模块一个主色，不混色
   - 色块面积大，留白少

3. **超大字排版** (CSS: `font-size: 3-6vw`)
   - 标题字号占幻灯片15-30%面积
   - 无衬线粗体字（Helvetica Neue Bold、Arial Black）
   - 文字对齐：左对齐或居中，不右对齐

4. **偏移阴影** (CSS: `box-shadow: 8px 8px 0 #1A1A1A`)
   - 阴影完全实色，无模糊
   - 向右下偏移6-10px
   - 阴影颜色必须是黑色

5. **扁平化图标**
   - 几何形状图标（圆、方、三角）
   - 图标有粗边框
   - 无立体感、无渐变

**实测关键发现（蕴煜AI培训项目131页验证）：**

- **远距离可读性极强** — 粗边框+大字让投影效果远超其他风格，10米外仍清晰
- **信息层次天然清晰** — 色块分区自带视觉分组，无需额外设计
- **HTML渲染稳定性高** — 相比漫画风格，Neo-Brutalism的CSS非常简单（无复杂SVG、无曲线），渲染成功率接近100%
- **适合信息密集场景** — 每页可容纳3-5个模块，互不干扰
- **无需AI生成** — 纯CSS即可完美实现，不依赖AI图片生成（这是关键优势）

**最佳适用场景：**
- 企业内训（信息量大、需远距离可读）
- 线下技术分享（投影仪环境）
- 数据密集报告（多模块并存）
- Workshop工作坊（需要清晰的步骤指引）

**注意事项：**
- 避免使用蓝色或紫色底（容易变成赛博风）
- 文字必须黑色或深色，不要白色（Neo-Brutalism的核心是「强对比」而非「反白」）
- 如果出现溢出，减少内容而非缩小字号——大字是灵魂

**与其他风格的区别：**
- vs Bauhaus：Neo-Brutalism更「粗暴」，边框更粗，色彩更饱和
- vs Neo-Pop：Neo-Pop有杂志感和装饰元素，Neo-Brutalism完全功能主义
- vs 苏联构成主义：构成主义有对角线和动态感，Neo-Brutalism是正交网格

**搜索关键词（灵感参考）：**
- `neubrutalism web design`
- `brutalist poster design`
- `Gumroad brand design`
- `flat design with thick borders`

---

## 第四类：Professional / Editorial 设计系统（Path A 专用）

> 以下6种风格使用 HTML→PPTX 路径（Path A），依赖精确排版和网格系统，不适合全AI视觉（Path B）。

| # | 风格 | 适合场景 | 核心特点 |
|---|------|---------|---------|
| P1 | **Pentagram Editorial** | 行业分析、咨询报告、数据驱动 | 字体即语言，瑞士网格，ONE accent color |
| P2 | **Fathom Data Narrative** | 数据报告、科学展示、研究汇报 | 高信息密度+设计优雅，图表即叙事 |
| P3 | **Müller-Brockmann Grid** | 培训课件、技术架构、流程说明 | 数学精确网格，功能主义至上 |
| P4 | **Build Luxury Minimal** | 投资路演、品牌高管汇报、奢侈品 | 75%留白，微妙字重变化，高端克制 |
| P5 | **Takram Speculative** | 设计思维、产品愿景、战略规划 | 柔和科技感，概念原型图作为核心视觉 |
| P6 | **NYT Magazine Editorial** ★ | 正式商务、数据报告、行业分析 | Georgia衬线标题+红色顶部规则线+编辑室排版权威感 |

**更深入的风格细节**：参考 `design-philosophy` skill 的 `references/design-styles.md`

### P1. Pentagram Editorial — 编辑杂志风（信息建筑派）

- Philosophy: Pentagram/Michael Bierut — 字体即语言，网格即思想。用极度克制的设计让数据和内容自己说话
- Colors: 奶油白(#FFFDF7) bg, 近黑(#1A1A1A) text, ONE accent color（如橙红#D4480B或品牌色）
- Ratio: 60% whitespace / 30% content / 10% accent
- Typography: 粗黑标题(28pt+) + 轻正文(10-13pt), 英文section label作为设计元素 (INSIGHT / PART 03)
- Composition: 瑞士网格系统, 2px黑色边框卡片, 精确的水平分隔线, 数据可视化内嵌
- Visual language: 极简图标, 条形图/饼图/趋势线, callout框, tag标签
- Reference: "Like a McKinsey insight report meets Monocle magazine — data-rich but editorially elegant"

### P2. Fathom Data Narrative — 数据叙事风（科学期刊派）

- Philosophy: Fathom Information Design — 每一个像素都必须承载信息。科学严谨+设计优雅
- Colors: 白(#FFFFFF) bg, 深灰(#333) text, 海军蓝(#1A365D) primary + 一个highlight color
- Ratio: 50% charts/data / 30% text / 20% whitespace
- Typography: GT America/Graphik风格的sans-serif, 大数字(60pt+)作为视觉锚点, 精确的脚注/来源标注
- Composition: 高信息密度但不拥挤, 注释系统嵌入布局, small multiples图表阵列, 精确的时间线
- Visual language: 散点图, 热力图, timeline, 带注释的图表, 数据标签精确到小数
- Reference: "Like a Nature paper's data supplement meets a Bloomberg data feature"

### P3. Müller-Brockmann Grid — 瑞士网格风（纯粹主义派）

- Philosophy: Josef Müller-Brockmann — 客观性即美。数学精确的网格系统让任何混乱的信息变得有序
- Colors: 白(#FFFFFF) bg, 黑(#000) text, 最多一个强调色
- Ratio: 70% structured grid / 20% text / 10% accent
- Typography: Akzidenz-Grotesk/Helvetica, 严格的8pt基线网格, 绝对左对齐, 字重对比(300 vs 700)
- Composition: 8列数学网格, 所有元素对齐到网格线, 绝对不允许装饰元素, 功能主义至上
- Visual language: 纯几何图形, 黑色线条表格, 精确对齐的列表, 无图标无插画
- Reference: "Like the original Swiss Style poster — timeless, rational, zero decoration"

### P4. Build Luxury Minimal — 奢侈极简风（当代品牌派）

- Philosophy: Build Studio — 精致的简单比复杂更难。用大量留白和微妙字重变化传达高端感
- Colors: 纯白(#FFFFFF) bg, 深灰(#2D2D2D) text, 单一accent（品牌色）极少量使用
- Ratio: 75% whitespace / 15% text / 10% accent
- Typography: 字重变化极微妙(200-600), 标题巨大(48pt+)但轻, 正文小而精(12pt), 字间距宽松
- Composition: 黄金比例构图, 元素极少, 每页只说一件事, 呼吸感优先
- Visual language: 高端产品图（如果有）, 极简图标线条, 大面积纯色块, 圆角卡片
- Reference: "Like an Apple keynote meets a Celine lookbook — confident restraint"

### P5. Takram Speculative — 日式思辨风（东方哲学派）

- Philosophy: Takram — 技术是思考的媒介。用柔和的科技感和概念原型图传达深度思考
- Colors: 暖灰(#F5F3EF) bg, 深灰(#3D3D3D) text, 鼠尾草绿(#8B9D77) accent
- Ratio: 55% warm bg / 25% diagrams / 20% text
- Typography: 圆润的sans-serif, 标题不用粗体而用大尺寸(36pt+), 正文温暖(14pt), 行高宽松(1.8)
- Composition: 柔和阴影(blur 20px+), 圆角(16px+), 概念图/流程图作为核心视觉, 卡片式布局
- Visual language: 概念原型图, 柔和渐变, 流程图即艺术, 手绘感图标, 自然色调
- Reference: "Like a Takram project page — where technology feels thoughtful, not aggressive"
- 执行路径: Path A（HTML→PPTX，配图可AI辅助生成）

### P6. NYT Magazine Editorial — 纽约时报编辑风（新闻排版派）★ **主要推荐**

- Philosophy: 新闻编辑室的排版传统——用Georgia衬线字体的权威感 + 精确的horizontal rule系统 + 极克制的单一编辑红，让内容在白纸上自己发声。有温度但有权威感，从不花哨。
- Colors: 近白纸色(#FEFEF9) bg，近黑(#1A1A1A) text，编辑红(#C8000A) accent（极少量，仅用于顶部rule线、section label、步骤编号装饰）
- Ratio: 55% whitespace / 35% content / 10% accent
- Typography: Georgia/'Times New Roman'衬线体做所有标题(36pt+)；系统sans-serif做正文(13pt)；section label用小型大写字母(font-variant: small-caps)配宽字间距(letter-spacing: 0.15em)
- Composition: html元素加5px红色顶部rule → masthead区(出版名+版次信息+主标题+斜体deck副标题) → section rule(4px红bar+small-caps label+水平分割线) → 内容网格 → 步骤用大字装饰背景数字(Georgia, 140px, opacity 6%)
- Visual language: 水平rule系统贯穿全文；双栏/三栏比较表格(1px #CCC border, 底部2px实线强调)；深色终端代码块(#1C1F2B背景，带颜色路径标识)；路径A用编辑蓝(#1A4A8A)，路径B用编辑绿(#1A6B45)
- Reference: "Like The Economist meets NYT data journalism — typographically authoritative, zero decoration, every rule has a reason"
- 执行路径: **Path A 专属**（html2pptx）。字体精度和间距系统是这个风格的命脉，AI图片生成无法保证排版精确性；HTML→PPTX完整保留所有字体和布局
- 最佳适用场景: 正式商务汇报、数据报告、行业分析、投资路演、任何需要「权威感」的演示
- 实测来源: workflow.html设计验证（2026-02-23）——用户反馈「纽约时报html风格非常好」

**HTML关键CSS：**
```css
html {
  border-top: 5px solid #C8000A;  /* 编辑室顶部rule，整个风格的签名 */
  background: #FEFEF9;
}
h1, h2, h3 {
  font-family: Georgia, 'Times New Roman', serif;
}
.section-label {
  font-variant: small-caps;
  letter-spacing: 0.15em;
  color: #C8000A;
  font-size: 11px;
  font-weight: 700;
}
.step-bg-num {
  font-family: Georgia, serif;
  font-size: 140px;
  color: #C8000A;
  opacity: 0.055;  /* 极轻，只是质感，不抢主视觉 */
  position: absolute;
}
.code-block {
  background: #1C1F2B;
  border-left: 3px solid;
}
.code-block.path-a { border-left-color: #1A4A8A; }
.code-block.path-b { border-left-color: #1A6B45; }
```

---

### 19. SMG学术报告 (SMG Academic Report)

**来源**：template_smg.pptx，4:3学术答辩/项目汇报PPT模板

**配色方案**：
- 主色（标题/强调）：#A50021（深绯红）25% — 所有标题、章节标签
- 副色（正文/标签）：#000066（深海军蓝）40% — 正文、小标题、内容标签
- 链接/高亮：#0000FF（纯蓝）5% — 链接文字、数据高亮
- 警示/重点：#C00000（暗红）5% — 重要结论、关键数据
- 近黑：#050507 — 图表标注
- 浅蓝背景：#E6F5FF — 内容卡片底色
- 白色：#FFFFFF — 背景

**CSS属性（Path A HTML）**：
- body背景：#FFFFFF
- header：background: #A50021; height: 52pt; color: #FFFFFF
- 页眉装饰条：background: #A50021; height: 16pt
- 标题：font-size: 24pt; font-weight: bold; color: #A50021; font-family: "Microsoft YaHei"
- 章节标签：background: #000066; color: #FFFFFF; font-size: 14pt; bold; border-radius: 3pt; padding: 4pt 12pt
- 正文卡片：background: #F0F4F8; border-left: 3pt solid #000066; padding: 8pt 12pt
- 重点卡片：background: #FFF0F0; border-left: 3pt solid #A50021; padding: 8pt 12pt
- 底部信息栏：background: #000066; color: #FFFFFF; font-size: 10pt; height: 24pt
- 页码：color: #000066; font-size: 14pt; font-family: "DIN", sans-serif; bold

**字体**：
- 中文标题：微软雅黑 (Microsoft YaHei) Bold 24-36pt
- 中文正文：微软雅黑 Bold 14-22pt
- 英文/数字：Times New Roman Bold
- 数字标签：DIN Bold

**构图规则**：
- 4:3比例（720pt × 540pt），非16:9
- 顶部：深色标题栏（~1.3英寸高）含标题文字
- 中部：白色背景 + 浅蓝底色圆角卡片承载内容
- 章节标题用深蓝色标签（pill形状，白字）
- 图片嵌入内容区域，与文字混排
- 底部：深蓝信息栏 + 右下角页码

**PPT构建Prompt要素**（slide排版布局——供 huashu-slides 使用）：
academic report style, crimson red and navy blue color scheme, 
clean white background, rounded content cards with light blue fill,
dark blue section labels with white text, formal and structured layout,
bold sans-serif Chinese typography, Times New Roman for English,
no decorative illustrations, data-driven, professional and serious

**生图Prompt要素**（科研论文配图风格——供 gpt-image-2 使用）：
publication-quality scientific figure, clean white background,
precise data visualization with clearly labeled axes and legends,
professional sans-serif typography for figure labels (Helvetica style),
color-blind friendly palette: navy blue #000066 primary, crimson #A50021 accent,
crisp vector-quality lines and geometric shapes with consistent stroke weights,
flat 2D style, no photographic textures, no decorative elements,
no rounded corners, no drop shadows, no gradients,
focused on data clarity and information density,
suitable for Nature/Science/Cell journal publication figures

**适合场景**：学术答辩、项目汇报、开题报告、研究进展汇报
**不适场景**：品牌营销、创意展示、科普推广

**样例图**：`assets/style-samples/style-19-smg.png`

---

### 20. Study Style 学术研究 (Academic Research)

**设计理念**：像一位好的学术演讲者那样做PPT——知道何时用一张图震撼全场，何时停下来深入剖析一组数据，何时用简洁的结论收束讨论。不是每一页都需要密密麻麻的文字，也不是每一页都适合极简到只剩一个数字。**详略得当，因页制宜，节奏有呼吸感。**

这个风格的灵感来源有三：Nature/Science 的信息图（视觉化复杂概念）、大学出版物的排版传统（衬线体 + 精确网格）、TED 学术演讲的节奏感（视觉冲击页 → 深度页 → 过渡页交替）。

> **核心设计原则：这不是一套"模板"，是一种创作方法论。** 签名元素提供视觉身份一致性。布局模式库覆盖从"极简视觉页（10字）"到"深度论证页（120字）"的完整频谱。**相邻页面不得使用相同布局模式。每页根据其论证目标、内容密度、叙事角色独立设计。**

---

#### 签名元素（每页不变，构成视觉身份）

极简框架——只保留必要的视觉锚点，把最大画布留给内容：

| 元素 | 规范 | 作用 |
|------|------|------|
| 页面底色 | `background: #FAF9F6` | 暖纸白 |
| 顶部细线 | `position: absolute; top: 0; width: 100%; height: 2pt; background: #1B2A4A` | 顶部收边 |
| 底部细线 | `position: absolute; bottom: 14pt; width: 100%; height: 1pt; background: #E5E0D8` | 底部轻闭合 |
| 页码 | `color: #C8963E; font-size: 10pt; font-family: Georgia; right: 28pt; bottom: 2pt` | 右下角 |
| 章节指示 | 可选——右上角小号章节名 `color: #6B6760; font-size: 8pt; font-family: Georgia, serif; right: 28pt; top: 10pt` | 导航辅助 |
| 琥珀短rule | `height: 2.5pt; background: #C8963E; width: 36-64pt` | 标志性装饰，按需使用 |

**关键变化**：去掉了厚重的全宽页眉栏和底部栏——它们占用5-10%的页面高度且制造"模板感"。改为两条极细的边界线 + 右下角页码。内容获得最大画布。

---

#### 色彩与材质（Material Palette）

- **主色**：`#1B2A4A`（深蓝黑）—— 标题、图表主色、节点、箭头
- **点缀色**：`#C8963E`（暖琥珀金）—— 关键数字、装饰线、强调节点
- **正文色**：`#1E1D1A`（暖近黑）—— 段落文字（少量使用）
- **辅助色**：`#6B6760`（暖中灰）—— 标签、脚注、来源
- **卡片底色**：`#F2F0EB`（暖浅灰）—— 内容区块
- **重点底色**：`#FEF9F0`（暖象牙白）—— 核心观点/结论高亮
- **分割线色**：`#E5E0D8`（暖浅褐）—— 细线、表格线
- **图表扩展色板**（用于多系列对比时）:
  - `#3A5A80` 中蓝（第3系列）
  - `#D4A853` 中琥珀（第4系列）
  - `#8FA3B5` 灰蓝（背景/辅助）

#### 字体层级（Typography Scale）

| 层级 | 中文 | 英文/数字 | 大小 | 用途 |
|------|------|----------|------|------|
| H1 标题 | 思源宋体/宋体 Bold | Georgia Bold | 22-30pt | 每页断言句标题（≤20字） |
| H2 区块标题 | 微软雅黑 Bold | Georgia Bold | 13-16pt | 图表/卡片/区块的标题 |
| Body 正文 | 微软雅黑 Regular | Georgia Regular | 10-12pt | 仅深度论证页使用段落 |
| Caption | 微软雅黑 Regular | Georgia Italic | 8-9pt | 脚注/来源/数据标注 |
| Display Number | — | Georgia Bold | 60-150pt | 数据聚焦页的超大数字 |

---

#### 内容密度频谱（Density Spectrum）

> **这是 Study Style 最重要的概念。不是所有页面都该同样"详细"或同样"简洁"。**

```
极简视觉页 ←————————————————————————————→ 深度论证页
(10-30字)                                    (80-150字)

适合：封面、章节分隔、      适合：概念对比、      适合：复杂方法、
       关键数据冲击、             应用案例、           文献综述、
       总结收束                  流程展示            深度分析
```

**决策指南**——为每一页确定内容密度时，问三个问题：

| 问题 | 倾向极简 | 倾向详细 |
|------|---------|---------|
| 观众已有背景知识吗？ | 有 → 视觉提示即可 | 无 → 需要展开解释 |
| 这页在叙事中的角色？ | 冲击/过渡/收束 | 论证/教育/说服 |
| 信息离开这页后还能被查到吗？ | 能（如众所周知的事实） | 不能（如你的独家数据） |

**10页学术PPT的典型节奏**（详略交替，有呼吸感）：

```
第1页 封面        ████ 极简（20字）         — 视觉冲击，建立基调
第2页 目录        ████ 极简（30字）         — 快速导航
第3页 背景动机    ██████████ 深度（100字）  — 建立问题紧迫性
第4页 核心方法1   ██████ 中等（60字+图）    — 图为主，文字为辅
第5页 核心方法2   ██████ 中等（50字+图）    — 对比图，文字标注
第6页 方法3/补充  ██████████ 深度（90字）   — 论证展开
第7页 应用案例    ██████ 中等（40字×5块）   — 多点并列，每点精炼
第8页 挑战/瓶颈   ██████ 中等（60字+图表）  — 数据可视化为主
第9页 未来方向    ██████████ 深度（100字）  — 前瞻需要论证
第10页 总结       ████ 极简（25字×4条）    — 结论式收束
```

**节奏规律**：
- 极简页与深度页交替出现（不连续2页同为深度页）
- 配图页文字量自动降低30-50%（图承载信息）
- 每页至少有一个"视觉锚点"——即使深度页也需要一个让人记住的视觉元素

---

#### 布局模式库（Layout Pattern Vocabulary）

> **硬性规则：相邻页不同模式。10页≥5种模式。模式选择服务于论证目标，不服务于"好看"。**

---

##### 模式 A：Hero Visual（封面 / 章节首页）
- **密度**：极简（15-25字）
- **论证角色**：建立第一印象、宣告新章节开始
- **视觉焦点**：一张全宽概念图（hero-cover），占页面55-65%面积
- **文字**：标题 ≤18字 + 副标题 ≤12字 + 琥珀短rule 48pt居中
- **结构**：图上文下或图右文左，标题叠于留白区
- **关键手法**：标题 24-28pt 衬线体；rule 2.5pt 琥珀色；图片用 `<div class="placeholder">` 占位
- **变化**：全宽图+底部标题栏 / 左侧大图+右侧标题 / 居中标题+背景水印数字（200pt Georgia opacity 3%）

##### 模式 B：Process Flow（流程 / 步骤 / 递进链）
- **密度**：极简→中等（每节点3-8字 × 4-7节点）
- **论证角色**：因果链、方法论步骤、A→B→C递进
- **视觉焦点**：水平/垂直排列的节点链，箭头连接
- **文字**：每节点标签3-6字，可选一行8字说明
- **结构**：节点（30-50pt圆形或圆角方形）+ 连接箭头 + 节点标签
- **关键手法**：
  - 节点用 `#1B2A4A` 填充（当前步骤）或 `#F2F0EB` + `#1B2A4A` 边框（其他步骤）
  - 箭头用纯CSS（宽div + 三角border技巧）或Unicode →，颜色 `#C8963E`
  - 节点内编号用 Georgia Bold 白字或 `#1B2A4A`
- **变化**：水平5-7步（流程全景）、垂直4步+右侧详细说明、蛇形2行（适合子步骤展开）
- **何时详细**：≤3步时，每步可加1-2句解释（20-30字/步）；≥5步时，每步仅标签
- **何时极简**：流程为观众熟知时，仅保留节点+箭头，作为"视觉提示"

##### 模式 C：Concept Diagram（概念关系 / 架构 / 层次）
- **密度**：极简→中等（节点标签3-8字）
- **论证角色**：展示概念之间的关系、系统的组成结构
- **视觉焦点**：空间化的概念网络或层次图
- **变体 C1 — 中心辐射**：1个中心概念（大节点 #1B2A4A 白字）+ 4-6个分支（小节点 #F2F0EB + #1B2A4A 边框）+ 连接线 1pt #C8963E
- **变体 C2 — 层次嵌套**：3-4层嵌套矩形（外层→内层，颜色从浅到深），表达"整体→部分"或"基础→应用"
- **变体 C3 — 网络连接**：6-10个节点不规则分布，关键连接用实线，次要连接用虚线
- **关键手法**：所有节点用 `<div>` + `border-radius` + `border` 实现；连接线用极窄 `<div>`（1-2pt高/宽）定位连接；文字仅作节点标签（5字以内）
- **何时详细**：当概念本身陌生时，每个节点下方加一行8-10字解释
- **何时极简**：当概念关系本身是重点时，仅标签，让空间布局说话

##### 模式 D：Data Spotlight（数据冲击）
- **密度**：极简（10-30字）
- **论证角色**：让一个关键数字成为视觉主角
- **视觉焦点**：1-2个超大数字（80-150pt Georgia Bold `#C8963E`）
- **文字**：数字 + 标签5字 + 一句15字内解释
- **结构**：
  - **单数字版**：数字居中偏上，下方标签+琥珀短rule+一句话
  - **双数字对比版**：左右各一个数字（分别用 `#1B2A4A` 和 `#C8963E`），中间细竖线
  - **四数字矩阵版**：2×2，每个数字40-60pt + 标签4字
- **关键手法**：数字字号≥80pt才有冲击力；配合迷你CSS柱状条（3-5个 `<div>` 高度对比）作为视觉装饰
- **何时详细**：当数字需要上下文解释时（如"R²=0.9 意味着什么"），加2-3句正文
- **何时极简**：当数字含义自明时（如"99.27% 化学有效性"），仅数字+标签
- **禁止**：不要让数字小于60pt——那是表格，不是Spotlight

##### 模式 E：Comparison Duality（A vs B 对比）
- **密度**：中等（40-80字）
- **论证角色**：两套方案、两种范式、新旧方法的直接对比
- **视觉焦点**：左右对称的对比面板
- **结构**：左右各50%宽度，中间1pt竖线 `#E5E0D8`
- **关键手法**：
  - 左侧面板用 `#1B2A4A` 色系（标题、边框、强调）
  - 右侧面板用 `#C8963E` 色系
  - 每侧：标题6字 + 3-4条要点（每条8-15字）+ 可选迷你图
- **变化**：
  - **文字对比**：纯文字，左右列表对比
  - **图文双对比**：上半文字对比 + 下半并排对比图（2个 `placeholder` div）
  - **上下分屏**：上图下文字，适合图示差异大于文字差异时
- **何时详细**：对比双方都需要论证时，每侧3-4条要点展开写
- **何时极简**：对比一目了然时（如"传统 vs AI"），仅标题+图标符号

##### 模式 F：Icon Matrix（多维并列 / 分类总览）
- **密度**：极简→中等（每个卡片10-30字）
- **论证角色**：4-9个并列维度，各有独立小论点
- **视觉焦点**：网格排列的视觉卡片——每个卡片由图标/符号/大数字 + 标题 + 1-2行描述组成
- **结构**：2×2、2×3、3×3网格，或不等大网格（1大+N小）
- **关键手法**：
  - 每个卡片有视觉符号（大号Unicode、CSS几何形、或小图placeholder）
  - 默认卡片底 `#F2F0EB`；重点卡片 `#FEF9F0` + `#C8963E` 左边框2pt
  - 卡片间间距≥10pt，留白呼吸
- **变化**：
  - **均等网格**：4/6/9个同等重要的点
  - **强调网格**：1大卡片（2倍面积，视觉焦点）+ 3-4个小卡片环绕
  - **通栏+网格**：上方1个通栏总述 + 下方2×3网格展开
- **何时详细**：每个卡片需要数据引用时，卡片内放2-3行文字
- **何时极简**：仅需分类导航时（如目录页），每格一个图标+标题+一行描述
- **禁止**：不要让所有卡片文字量完全一致——根据重要性差异，让内容决定卡片大小

##### 模式 G：Timeline Visual（时间轴 / 里程碑）
- **密度**：极简（每节点3-10字）
- **论证角色**：技术演进、项目阶段、里程碑回顾
- **视觉焦点**：一条水平线 + 节点序列
- **结构**：水平线（1.5pt `#E5E0D8`）贯穿中部 + 节点圆（8pt `#C8963E`）+ 上方年份 + 下方标签
- **关键手法**：
  - 关键节点放大到14pt并用 `#1B2A4A` 填充
  - 节点间距可不等——密集段表达快速发展，稀疏段表达缓慢演进
  - 当前/未来节点用虚线框 `#C8963E` 表示"未完成"
- **变化**：水平（≤8节点）、垂直（≤6节点+右侧详细卡片）、蛇形（分上下两行，适合10+节点）
- **何时详细**：每个节点下方加1-2句事件描述（适合需要解释的里程碑）
- **何时极简**：仅年份+关键词，时间线作为"视觉目录"

##### 模式 H：Framework Stack（层次框架）
- **密度**：极简→中等（每层标签5字 + 可选1行说明）
- **论证角色**：表达层次关系——基础→应用、底层→顶层、核心→外围
- **视觉焦点**：堆叠的色块层
- **变体 H1 — 金字塔**：底层宽→顶层窄，3-5层，底层 `#F2F0EB` 渐变到顶层 `#1B2A4A` 白字
- **变体 H2 — 同心环**：中心圆 `#1B2A4A` → 中环 `#FEF9F0` → 外环 `#F2F0EB`，表达"核心→外围"
- **变体 H2 — 阶梯**：从左下到右上递进的3-4个台阶，每阶一个色块
- **关键手法**：用CSS的 `width` 递减/递增表达层次；颜色从浅到深；文字仅标签
- **何时详细**：每层右侧或下方加1行说明（10-15字）
- **何时极简**：层次关系本身已足够表达，仅保留层标签

##### 模式 I：Pull Quote（引述强调）
- **密度**：极简（15-40字）
- **论证角色**：引用关键论断、定义核心概念、给出定调金句
- **视觉焦点**：大号引文
- **结构**：居中大号引文（16-22pt Georgia Italic `#1E1D1A`）+ 左侧3pt `#C8963E` 竖线 + 下方小字来源
- **关键手法**：引文与上下内容间留白≥20pt；可用 `#FEF9F0` 底色块衬托；竖线高度与引文等高
- **变化**：独立页面（章节分隔后的金句页）、嵌入其他模式的主卡片中
- **何时使用**：某句话值得"停下来让观众读"的时候——不要滥用，10页中最多1-2页

##### 模式 J：Visual Synthesis（总结收束）
- **密度**：极简（25-50字）
- **论证角色**：全PPT的"big picture"——核心结论的视觉收束
- **视觉焦点**：前面页面出现过的视觉元素（数字、图标、关键词）重新聚合
- **结构**：中心一个核心视觉（可以是总结图或最大结论的数字）+ 周围3-4个小结论卡片
- **关键手法**：
  - 最重要的结论在中心/最大面积 + `#FEF9F0` 底色 + `#C8963E` 左边框
  - 次要结论用较小卡片 + `#F2F0EB` 底色
  - 如果前面有配图，可以复用一张缩小版作为视觉呼应
- **变化**：均匀环绕（3-4个同等重要结论）、主次拼贴（1大+3小）、三列并排
- **原则**：结论不在多，在精。每一条结论是一句可以"带走"的话

---

#### 页面结构骨架（Page Anatomy）

```
┌────────────────────────────────────────────┐
│ ═══ 2pt #1B2A4A 顶部细线                │
│  [可选] 右上角章节导航 #6B6760 8pt       │
│                                            │
│  内容区（top: 18pt ~ bottom: 418pt）      │
│  left/right padding ≥ 36pt               │
│                                            │
│  · 视觉元素主导（50-80%面积）             │
│  · 文字作为标注和点睛                      │
│  · 空间位置、大小、颜色编码信息             │
│                                            │
│ ─── 1pt #E5E0D8 底部细线                │
│        页码 #C8963E 10pt Georgia         │
└────────────────────────────────────────────┘
```

内容区边界（16:9, 960pt × 540pt —— pptxgenjs LAYOUT_WIDE 标准尺寸）：
- 顶部安全线：18pt（标题可贴顶）
- 底部安全线：518pt（留底部线+页码）
- 左右安全区：≥36pt

内容区边界（4:3, 720pt × 540pt —— pptxgenjs LAYOUT_4x3 标准尺寸）：
- 顶部安全线：18pt
- 底部安全线：518pt
- 左右安全区：≥36pt

---

#### 详略节奏指南（Pacing Guide）

> 好的PPT像一段音乐——有强拍有弱拍，有快板有慢板。

**10页标准学术PPT的节奏模板**：

```
页1 封面      [极简·视觉]  Hero Visual         — 3秒建立基调
页2 目录      [极简·导航]  Icon Matrix          — 5秒扫描全貌
页3 背景      [深度·论证]  Process Flow+数据    — 建立问题紧迫性
页4 核心方法1 [中等·图文]  Concept Diagram+Side — 图说80%的话
页5 核心方法2 [中等·对比]  Comparison Duality   — 对比一目了然
页6 方法/补充  [深度·论证]  Process Flow+卡片   — 技术深潜
页7 应用案例   [中等·并列]  Icon Matrix          — 多点快速浏览
页8 挑战瓶颈   [中等·数据]  Data Spotlight+图表 — 数据可视化
页9 未来方向   [深度·论证]  Framework Stack      — 前瞻需要论据
页10 总结      [极简·收束]  Visual Synthesis     — 3条可带走的结论
```

**节奏设计原则**：
1. **不连续2页同密度**：极简→深度→中等→深度→极简...交替推进
2. **配图页文字减半**：有图片时让图片说话，文字只做标注
3. **第3页和第6页适合深度**：观众注意力曲线——开场后第一个高点，中场后第二个高点
4. **封面和总结是配重**：封面定调，总结定心，都用极简

---

#### 10页PPT布局分配示例

> 这不是规定。根据实际内容调整。关键是相邻不同模式，密度有呼吸感。

| 页码 | 内容类型 | 密度 | 布局模式 | 视觉焦点 |
|------|---------|------|---------|---------|
| 1 | 封面 | 极简 | **A — Hero Visual** | 概念图+标题+琥珀rule |
| 2 | 目录 | 极简 | **F — Icon Matrix**（4格） | 4个图标卡片=4个章节 |
| 3 | 背景动机 | 深度 | **B — Process Flow**（垂直4步） | 递进节点+每步配关键数据 |
| 4 | 核心方法1+图 | 中等 | **C — Concept Diagram** + 右图 | 架构图为主，文字解释为辅 |
| 5 | 核心方法2+图 | 中等 | **E — Comparison Duality** + 下图 | A vs B对比图 |
| 6 | 方法3/补充 | 深度 | **B — Process Flow**（水平5步） | 每步展开：原理+数据+引用 |
| 7 | 应用案例 | 中等 | **F — Icon Matrix**（2×3） | 5个方向各一个视觉卡片 |
| 8 | 挑战瓶颈 | 中等 | **D — Data Spotlight** + 底图 | 关键数字冲击+对比图表 |
| 9 | 未来方向 | 深度 | **H — Framework Stack**（金字塔） | 从基础到应用的层次图 |
| 10 | 总结 | 极简 | **J — Visual Synthesis** | 3条核心结论，主次拼贴 |

**效果**：10页，7种布局模式，密度从极简到深度交替推进，无相邻重复模式。

---

#### 与SMG学术报告风格的区别

| 维度 | SMG (#19) | Study Style (#20) |
|------|-----------|-------------------|
| 底色 | 纯白 #FFFFFF | 暖纸白 #FAF9F6 |
| 主色 | 深绯红 #A50021 | 深蓝黑 #1B2A4A |
| 点缀 | 无独立点缀色 | 暖琥珀金 #C8963E |
| 标题字体 | 无衬线（微软雅黑 Bold） | 衬线（宋体/Georgia Bold） |
| 页眉 | 全宽52pt深色标题栏 | 仅2pt顶部细线 |
| 底部 | 全宽24pt深蓝信息栏 | 1pt细线+页码 |
| 卡片 | 左侧粗色条（3pt），圆角 | 左侧细线（2pt），直角 |
| 章节标签 | Pill形色块（深蓝底白字） | 琥珀色文字/小装饰线 |
| 比例 | 4:3为主 | 16:9为主（可适配4:3） |
| 气质 | 庄重有力，答辩/汇报 | 沉静优雅，研究/教学 |
| **核心差异** | 文字驱动，色块分区 | **视觉驱动，详略得当** |

---

**PPT构建Prompt要素**（供 huashu-slides 使用）：
scholarly academic presentation with visual-first communication, warm paper-white background #FAF9F6,
serif Chinese headings (Songti/Noto Serif SC Bold) for concise assertion titles under 20 characters,
Georgia Bold for English numbers, amber gold #C8963E accent for key data highlights and decorative short rules,
minimalist framing with thin 2pt navy top line and 1pt warm gray bottom line instead of heavy header/footer bars,
generous whitespace around content, diagrams and spatial layouts as primary communication tools,
thin horizontal/vertical rules (#E5E0D8 1pt) for subtle content partitioning,
color-coded information hierarchy (navy for primary, amber for emphasis, warm gray for secondary),
no rounded corners, no gradients, no drop shadows, no heavy card borders,
like a well-designed Nature/Science infographic crossed with a TED presentation

**生图Prompt要素**（供 gpt-image-2 使用）：
scholarly publication figure, warm paper-white background #FAF9F6,
clean precise scientific diagrams and data visualizations with clearly labeled components,
deep navy blue #1B2A4A as primary color, warm amber #C8963E as accent,
professional serif typography (Georgia style) for all figure labels and annotations,
crisp vector-quality lines with consistent stroke weights (1-2pt),
flat 2D style, no photographic textures, no rounded corners, no drop shadows, no gradients,
thin bounding box around figures where appropriate, subtle grid lines (#E5E0D8) for data charts,
focused on visual clarity and information hierarchy,
suitable for university press monographs, academic journal figures, and conference presentations

**适合场景**：学术答辩、学位论文汇报、开题报告、课程讲稿、研究进展汇报、学术会议报告、教学课件
**不适场景**：品牌营销、年轻化推广、娱乐性展示

**样例图**：`assets/style-samples/style-20-study.png`

---

## 附录：自定义风格 + 通用排版规则

### 用户自定义风格（卡通/动漫参照）

当用户说「做成哆啦A梦风格」「像宫崎骏那样」时，将其当作**风格参照**而非版权角色请求，提取视觉DNA构建自定义设计系统。

| 用户说 | 提取的视觉特征 |
|--------|--------------|
| "Doraemon风格" | 圆形语言，蓝白红原色，简洁背景，可爱比例，神奇道具展示 |
| "Studio Ghibli" | 水彩质感，自然绿和天蓝，精细背景+简洁角色，温暖和wonder |
| "Calvin and Hobbes" | 动态墨线，表现力强的运动线，现实与幻想的哲学对比，茂盛室外场景 |
| "One Piece漫画" | 粗犷动态线条，夸张比例，戏剧性动作，高能量，粗轮廓 |
| "蜡笔小新" | 蜡笔状粗糙线条，扁平亮色，喜剧比例，日常场景变荒诞 |
| "Adventure Time" | 几何简单形状，糖果马卡龙色，细轮廓，异想天开的超现实背景 |

**自定义风格模板：**
```
[User Style]: "[参照名称]"
→ Shape language: [round/angular/geometric/organic]
→ Line quality: [thin uniform / thick varied / sketchy / brushwork]
→ Color palette: [从该美学中提取的具体颜色]
→ Character style: [比例、表现力等级]
→ Background treatment: [detailed/minimal/abstract]
→ Emotional tone: [warm/energetic/philosophical/surreal]
```

### 通用排版规则（所有风格适用）

- 最多2个字体家族（1个标题 + 1个正文）
- 标题：粗体、有个性 — ≥36pt（趋势：更大，作为图形化表面）
- 正文：清晰可读 — ≥18pt
- 中文：系统默认字体（PingFang SC / Microsoft YaHei）
- **核心原则**：排版是设计元素，不只是信息容器
