> 点击勘误[issues](https://github.com/webVueBlog/learn-webpack/issues)，哪吒感谢大家的阅读

## 输出(output)

可以通过配置 output 选项，告知 webpack 如何向硬盘写入编译文件。注意，即使可以存在多个 entry 起点，但只能指定一个 output 配置。

## 用法

在 webpack 配置中，output 属性的最低要求是，将它的值设置为一个对象，然后为将输出文件的文件名配置为一个 output.filename：

### webpack.config.js

```js
module.exports = {
  output: {
    filename: 'bundle.js',
  },
};
```

此配置将一个单独的 bundle.js 文件输出到 dist 目录中。






