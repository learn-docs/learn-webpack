> 点击勘误[issues](https://github.com/webVueBlog/learn-webpack/issues)，哪吒感谢大家的阅读

## plugin

插件 是 webpack 的 支柱 功能。Webpack 自身也是构建于你在 webpack 配置中用到的 相同的插件系统 之上！

插件目的在于解决 loader 无法实现的其他事。Webpack 提供很多开箱即用的 插件。

:::tip
Tip
如果在插件中使用了 webpack-sources 的 package，请使用 require('webpack').sources 替代 require('webpack-sources')，以避免持久缓存的版本冲突。
:::

## 剖析

webpack 插件是一个具有 apply 方法的 JavaScript 对象。apply 方法会被 webpack compiler 调用，并且在 整个 编译生命周期都可以访问 compiler 对象。

### ConsoleLogOnBuildWebpackPlugin.js

```js
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, (compilation) => {
      console.log('webpack 构建正在启动！');
    });
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;
```

compiler hook 的 tap 方法的第一个参数，应该是驼峰式命名的插件名称。建议为此使用一个常量，以便它可以在所有 hook 中重复使用。



