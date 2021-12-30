> 点击勘误[issues](https://github.com/webVueBlog/learn-webpack/issues)，哪吒感谢大家的阅读

## 入口起点(entry points)

在 webpack 配置中有多种方式定义 entry 属性。除了解释为什么它可能非常有用，我们还将向你展示如何去配置 entry 属性。

## 对象语法

用法：`entry: { <entryChunkName> string | [string] } | {}`

### webpack.config.js

```js
module.exports = {
  entry: {
    app: './src/app.js',
    adminApp: './src/adminApp.js',
  },
};
```

对象语法会比较繁琐。然而，这是应用程序中定义入口的最可扩展的方式。

:::tip
Tip
“webpack 配置的可扩展” 是指，这些配置可以重复使用，并且可以与其他配置组合使用。这是一种流行的技术，用于将关注点从环境(environment)、构建目标(build target)、运行时(runtime)中分离。然后使用专门的工具（如 webpack-merge）将它们合并起来。
:::

:::tip
Tip
当你通过插件生成入口时，你可以传递空对象 {} 给 entry。
:::

## 描述入口的对象

用于描述入口的对象。你可以使用如下属性：

- dependOn: 当前入口所依赖的入口。它们必须在该入口被加载前被加载。

- filename: 指定要输出的文件名称。

- import: 启动时需加载的模块。

- library: 指定 library 选项，为当前 entry 构建一个 library。

- runtime: 运行时 chunk 的名字。如果设置了，就会创建一个新的运行时 chunk。在 webpack 5.43.0 之后可将其设为 false 以避免一个新的运行时 chunk。

- publicPath: 当该入口的输出文件在浏览器中被引用时，为它们指定一个公共 URL 地址。请查看 output.publicPath。

### webpack.config.js

```js
module.exports = {
  entry: {
    a2: 'dependingfile.js',
    b2: {
      dependOn: 'a2',
      import: './src/app.js',
    },
  },
};
```

runtime 和 dependOn 不应在同一个入口上同时使用，所以如下配置无效，并且会抛出错误：

### webpack.config.js

```js
module.exports = {
  entry: {
    a2: './a',
    b2: {
      runtime: 'x2',
      dependOn: 'a2',
      import: './b',
    },
  },
};
```

确保 runtime 不能指向已存在的入口名称，例如下面配置会抛出一个错误：

```js
module.exports = {
  entry: {
    a1: './a',
    b1: {
      runtime: 'a1',
      import: './b',
    },
  },
};
```

另外 dependOn 不能是循环引用的，下面的例子也会出现错误：

```js
module.exports = {
  entry: {
    a3: {
      import: './a',
      dependOn: 'b3',
    },
    b3: {
      import: './b',
      dependOn: 'a3',
    },
  },
};
```

