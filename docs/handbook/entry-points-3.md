> 点击勘误[issues](https://github.com/webVueBlog/learn-webpack/issues)，哪吒感谢大家的阅读

## 入口起点(entry points)

在 webpack 配置中有多种方式定义 entry 属性。除了解释为什么它可能非常有用，我们还将向你展示如何去配置 entry 属性。

## 常见场景

以下列出一些入口配置和它们的实际用例：

分离 app(应用程序) 和 vendor(第三方库) 入口

### webpack.config.js

```js
module.exports = {
  entry: {
    main: './src/app.js',
    vendor: './src/vendor.js',
  },
};
```

### webpack.prod.js

```js
module.exports = {
  output: {
    filename: '[name].[contenthash].bundle.js',
  },
};
```

### webpack.dev.js

```js
module.exports = {
  output: {
    filename: '[name].bundle.js',
  },
};
```

这是什么？ 这是告诉 webpack 我们想要配置 2 个单独的入口点（例如上面的示例）。

为什么？ 这样你就可以在 vendor.js 中存入未做修改的必要 library 或文件（例如 Bootstrap, jQuery, 图片等），然后将它们打包在一起成为单独的 chunk。内容哈希保持不变，这使浏览器可以独立地缓存它们，从而减少了加载时间。

:::tip
Tip
在 webpack < 4 的版本中，通常将 vendor 作为一个单独的入口起点添加到 entry 选项中，以将其编译为一个单独的文件（与 CommonsChunkPlugin 结合使用）。

而在 webpack 4 中不鼓励这样做。而是使用 optimization.splitChunks 选项，将 vendor 和 app(应用程序) 模块分开，并为其创建一个单独的文件。不要 为 vendor 或其他不是执行起点创建 entry。
:::

## 多页面应用程序

### webpack.config.js

```js
module.exports = {
  entry: {
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js',
  },
};
```

这是什么？ 我们告诉 webpack 需要三个独立分离的依赖图（如上面的示例）。

为什么？ 在多页面应用程序中，server 会拉取一个新的 HTML 文档给你的客户端。页面重新加载此新文档，并且资源被重新下载。然而，这给了我们特殊的机会去做很多事，例如使用 optimization.splitChunks 为页面间共享的应用程序代码创建 bundle。由于入口起点数量的增多，多页应用能够复用多个入口起点之间的大量代码/模块，从而可以极大地从这些技术中受益。

:::tip
Tip
根据经验：每个 HTML 文档只使用一个入口起点。
:::





