> 点击勘误[issues](https://github.com/webVueBlog/learn-webpack/issues)，哪吒感谢大家的阅读

## plugin

插件 是 webpack 的 支柱 功能。Webpack 自身也是构建于你在 webpack 配置中用到的 相同的插件系统 之上！

插件目的在于解决 loader 无法实现的其他事。Webpack 提供很多开箱即用的 插件。

:::tip
Tip
如果在插件中使用了 webpack-sources 的 package，请使用 require('webpack').sources 替代 require('webpack-sources')，以避免持久缓存的版本冲突。
:::

## 用法

由于插件可以携带参数/选项，你必须在 webpack 配置中，向 plugins 属性传入一个 new 实例。

取决于你的 webpack 用法，对应有多种使用插件的方式。

### 配置方式

#### webpack.config.js

```js
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 访问内置的插件
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    filename: 'my-first-webpack.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
};
```

ProgressPlugin 用于自定义编译过程中的进度报告，HtmlWebpackPlugin 将生成一个 HTML 文件，并在其中使用 script 引入一个名为 my-first-webpack.bundle.js 的 JS 文件。

### Node API 方式

在使用 Node API 时，还可以通过配置中的 plugins 属性传入插件。

#### some-node-script.js

```js
const webpack = require('webpack'); // 访问 webpack 运行时(runtime)
const configuration = require('./webpack.config.js');

let compiler = webpack(configuration);

new webpack.ProgressPlugin().apply(compiler);

compiler.run(function (err, stats) {
  // ...
});
```

:::tip
Tip
你知道吗：以上看到的示例和 webpack 运行时(runtime)本身 极其类似。webpack 源码 中隐藏有大量使用示例，你可以将其应用在自己的配置和脚本中。
:::





