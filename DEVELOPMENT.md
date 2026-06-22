# 页面开发说明

本文用于记录 StockStudy 新增页面的开发方法，方便后续维护时保持结构和风格一致。

## 一、基本原则

1. 使用静态 HTML 页面。
2. 不引入后端服务。
3. 不依赖数据库。
4. 不引入复杂前端框架。
5. 页面之间通过普通超链接跳转。
6. 所有页面统一引用 `assets/style.css`。
7. 优先修改已有页面，避免新增过多零散页面。

## 二、目录约定

```text
StockStudy
│
├── index.html
│
├── assets
│   ├── style.css
│   ├── image
│   └── script
│
├── pages
│   ├── 01-market.html
│   ├── 02-financial-report.html
│   ├── 03-valuation.html
│   ├── 04-industry.html
│   ├── 05-strategy.html
│   ├── 06-practice.html
│   ├── 07-case-study.html
│   └── 08-review.html
│
├── README.md
└── DEVELOPMENT.md
```

## 三、新增页面流程

### 1. 确认页面位置

学习阶段类页面统一放在 `pages` 目录下。

命名规则：

```text
阶段编号-英文主题.html
```

示例：

```text
pages/02-financial-report.html
pages/03-valuation.html
pages/04-industry.html
```

### 2. 复制基础页面结构

新增页面时，优先参考 `pages/01-market.html` 的结构。

页面必须包含：

- `<!DOCTYPE html>`
- `<html lang="zh-CN">`
- `<meta charset="UTF-8">`
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- 页面标题
- 样式引用
- 顶部标题区
- 导航栏
- 主内容区
- 返回首页链接

### 3. 引用样式文件

首页引用：

```html
<link rel="stylesheet" href="assets/style.css">
```

`pages` 目录下的页面引用：

```html
<link rel="stylesheet" href="../assets/style.css">
```

### 4. 更新首页入口

新增阶段页面后，需要在 `index.html` 中补充对应链接。

示例：

```html
<a href="pages/02-financial-report.html">第二阶段：财报分析</a>
```

同时在学习路线区域补充对应阶段内容。

## 四、页面模板

`pages` 目录下页面可使用以下模板：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>页面标题 - StockStudy</title>
  <link rel="stylesheet" href="../assets/style.css">
</head>
<body>
  <header class="site-header">
    <h1>页面标题</h1>
    <p>页面简介。</p>
  </header>

  <nav class="site-nav">
    <div class="site-nav-inner">
      <a href="../index.html">首页</a>
      <a class="active" href="当前页面文件名.html">当前页面标题</a>
    </div>
  </nav>

  <main>
    <section class="card">
      <h2>一、一级内容标题</h2>
      <p>正文内容。</p>
    </section>

    <section class="card">
      <h2>二、一级内容标题</h2>
      <table>
        <thead>
          <tr>
            <th>字段一</th>
            <th>字段二</th>
            <th>字段三</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>内容一</td>
            <td>内容二</td>
            <td>内容三</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="card">
      <h2>阶段小结</h2>
      <ul class="stage-list">
        <li>总结要点一。</li>
        <li>总结要点二。</li>
        <li>总结要点三。</li>
      </ul>
    </section>

    <div class="footer-link">
      <a href="../index.html">返回首页</a>
    </div>
  </main>
</body>
</html>
```

## 五、内容编写规范

### 1. 内容结构

每个阶段页面建议按以下结构编写：

```text
概念解释 → 分类对比 → 关键规则 → 常见误区 → 阶段小结 → 下一步学习
```

### 2. 表格优先

涉及对比、分类、规则、指标时，优先使用表格展示。

示例：

```html
<table>
  <thead>
    <tr>
      <th>概念</th>
      <th>含义</th>
      <th>注意点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PE</td>
      <td>市盈率，股价与每股收益的比值。</td>
      <td>不能脱离行业和增长速度单独判断高低。</td>
    </tr>
  </tbody>
</table>
```

### 3. 语言风格

- 使用简洁中文。
- 避免空洞表述。
- 避免投资建议式结论。
- 重点解释概念、方法和判断框架。
- 不写短期预测。

### 4. 投资内容边界

页面内容以学习和研究为目的，不直接给出买卖建议。

避免写法：

```text
这只股票可以买。
这个行业马上会涨。
```

推荐写法：

```text
分析该公司时，需要重点关注收入增长、利润率变化、现金流质量和估值水平。
```

## 六、维护检查清单

新增或修改页面后，检查以下内容：

| 检查项 | 要求 |
|---|---|
| 页面路径 | 是否放在正确目录 |
| 样式引用 | 首页用 `assets/style.css`，子页面用 `../assets/style.css` |
| 导航链接 | 是否能返回首页 |
| 首页入口 | `index.html` 是否增加对应链接 |
| 页面标题 | `<title>` 和 `<h1>` 是否一致 |
| 内容结构 | 是否按学习路径组织 |
| 表格内容 | 对比类内容是否清晰 |
| 风险边界 | 是否避免直接投资建议 |

## 七、后续页面开发顺序

建议按 README 中的学习路线继续开发：

1. `pages/02-financial-report.html`：财报分析
2. `pages/03-valuation.html`：估值方法
3. `pages/04-industry.html`：行业研究
4. `pages/05-strategy.html`：投资体系
5. `pages/06-practice.html`：实盘与复盘
6. `pages/07-case-study.html`：案例库
7. `pages/08-review.html`：复盘库
