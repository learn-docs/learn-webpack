> 点击勘误[issues](https://github.com/webVueBlog/learn-webpack/issues)，哪吒感谢大家的阅读

## loader

loader 用于对模块的源代码进行转换。loader 可以使你在 import 或 "load(加载)" 模块时预处理文件。因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的得力方式。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript 或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 import CSS 文件！

## 使用 loader

在你的应用程序中，有两种使用 loader 的方式：

- 配置方式（推荐）：在 webpack.config.js 文件中指定 loader。
- 内联方式：在每个 import 语句中显式指定 loader。

## 配置方式

module.rules 允许你在 webpack 配置中指定多个 loader。 这种方式是展示 loader 的一种简明方式，并且有助于使代码变得简洁和易于维护。同时让你对各个 loader 有个全局概览：

loader 从右到左（或从下到上）地取值(evaluate)/执行(execute)。在下面的示例中，从 sass-loader 开始执行，然后继续执行 css-loader，最后以 style-loader 为结束。查看 loader 功能 章节，了解有关 loader 顺序的更多信息。

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // [style-loader](/loaders/style-loader)
          { loader: 'style-loader' },
          // [css-loader](/loaders/css-loader)
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          // [sass-loader](/loaders/sass-loader)
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
};
```

## 内联方式

可以在 import 语句或任何 与 "import" 方法同等的引用方式 中指定 loader。使用 ! 将资源中的 loader 分开。每个部分都会相对于当前目录解析。

```js
import Styles from 'style-loader!css-loader?modules!./styles.css';
```

通过为内联 import 语句添加前缀，可以覆盖 配置 中的所有 loader, preLoader 和 postLoader：

使用 ! 前缀，将禁用所有已配置的 normal loader(普通 loader)

```js
import Styles from '!style-loader!css-loader?modules!./styles.css';
```

使用 !! 前缀，将禁用所有已配置的 loader（preLoader, loader, postLoader）

```js
import Styles from '!!style-loader!css-loader?modules!./styles.css';
```

使用 -! 前缀，将禁用所有已配置的 preLoader 和 loader，但是不禁用 postLoaders

```js
import Styles from '-!style-loader!css-loader?modules!./styles.css';
```

选项可以传递查询参数，例如 ?key=value&foo=bar，或者一个 JSON 对象，例如 ?{"key":"value","foo":"bar"}。

:::tip
Tip
尽可能使用 module.rules，因为这样可以减少源码中样板文件的代码量，并且可以在出错时，更快地调试和定位 loader 中的问题。
:::

