# CDP 搜索模式参考

> **遗留文件** — 阶段二知识搜索已改为由 knowledge-agent 通过 open-websearch 执行。
> 此文件仅供 knowledge-agent 在 open-websearch 不可用时作为 CDP 备选方案参考。
> 主 agent 不直接使用此文件。

---

## 学术/技术类主题：Google Scholar CDP 直达

### Step A — 打开搜索页

```bash
curl -s -X POST --data-raw 'https://scholar.google.com/scholar?q=<URL编码关键词>&hl=en&as_sdt=0%2C5&as_ylo=<年份>' http://localhost:3456/new
```

搜索词策略：主题 + 细分方向，分多个 tab 并行发起。每个 tab 覆盖一个子主题（综述、方法、应用、挑战、趋势）。

### Step B — 提取搜索结果

```bash
curl -s -X POST "http://localhost:3456/eval?target=<TAB_ID>" -d \
  "Array.from(document.querySelectorAll('.gs_ri')).slice(0,10).map(el => ({
    title: el.querySelector('.gs_rt')?.textContent?.trim() || '',
    snippet: el.querySelector('.gs_rs')?.textContent?.trim()?.substring(0,300) || '',
    meta: el.querySelector('.gs_a')?.textContent?.trim() || ''
  }))"
```

### Step C — 深入提取高价值论文详情

对搜索结果中 score ≥ 3 的论文（评判标准：标题匹配度 + 期刊声望 + 年份新鲜度），点击标题进入详情页：

```bash
# 点击论文标题
curl -s -X POST "http://localhost:3456/click?target=<TAB_ID>" -d '.gs_rt a'

# 提取摘要
curl -s -X POST "http://localhost:3456/eval?target=<TAB_ID>" -d \
  "document.querySelector('.gsc_abstract')?.textContent?.trim() || document.querySelector('#abssection')?.textContent?.trim() || ''"
```

### Step D — 关闭 tab

```bash
curl -s "http://localhost:3456/close?target=<TAB_ID>"
```

---

## 通用/行业类主题：Bing CDP 搜索

```bash
# Bing 搜索（对自动化友好）
curl -s -X POST --data-raw 'https://www.bing.com/search?q=<URL编码关键词>' http://localhost:3456/new

# 提取搜索结果
curl -s -X POST "http://localhost:3456/eval?target=<TAB_ID>" -d \
  "Array.from(document.querySelectorAll('#b_results .b_algo')).slice(0,10).map(el => ({
    title: el.querySelector('h2')?.textContent?.trim() || '',
    url: el.querySelector('a')?.href || '',
    snippet: el.querySelector('.b_caption p')?.textContent?.trim()?.substring(0,300) || ''
  }))"
```

---

## Wikipedia / 科普类主题

```bash
# 直接导航 Wikipedia
curl -s -X POST --data-raw 'https://en.wikipedia.org/wiki/<Topic>' http://localhost:3456/new

# 或使用 Jina 节省 token（文章类页面最优）
curl -s "https://r.jina.ai/https://en.wikipedia.org/wiki/<Topic>"
```

---

## CDP 操作注意事项

- `/eval` 可穿透 Shadow DOM 和 iframe，返回结构化内容
- `/scroll` 到底部可触发懒加载，确保图片 URL 已加载
- 短时间内密集 `/new` 可能触发反爬——学术搜索间隔 ≥2s
- 关闭所有自己创建的 tab，保留用户原有 tab
- CDP Proxy 不可用时，降级为 WebSearch + WebFetch
