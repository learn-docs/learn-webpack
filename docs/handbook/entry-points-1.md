> 点击勘误[issues](https://github.com/webVueBlog/learn-webpack/issues)，哪吒感谢大家的阅读

## 入口起点(entry points)

在 webpack 配置中有多种方式定义 entry 属性。除了解释为什么它可能非常有用，我们还将向你展示如何去配置 entry 属性。

## 单个入口（简写）语法

用法：`entry: string | [string]`

### webpack.config.js

```js
module.exports = {
  entry: './path/to/my/entry/file.js',
};
```

entry 属性的单个入口语法，参考下面的简写：

### webpack.config.js

```js
module.exports = {
  entry: {
    main: './path/to/my/entry/file.js',
  },
};
```

我们也可以将一个文件路径数组传递给 entry 属性，这将创建一个所谓的 "multi-main entry"。在你想要一次注入多个依赖文件，并且将它们的依赖关系绘制在一个 "chunk" 中时，这种方式就很有用。

### webpack.config.js

```js
module.exports = {
  entry: ['./src/file_1.js', './src/file_2.js'],
  output: {
    filename: 'bundle.js',
  },
};
```

当你希望通过一个入口（例如一个库）为应用程序或工具快速设置 webpack 配置时，单一入口的语法方式是不错的选择。然而，使用这种语法方式来扩展或调整配置的灵活性不大。


