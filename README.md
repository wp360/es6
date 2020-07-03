# js设计模式

## 环境搭建
* 1. 生成package
`npm init`

* 2. 安装webpack
`npm i webpack webpack-cli --save-dev`

* 3. webpack设置
```js
// webpack.dev.config.js
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './release/bundle.js'
  }
}
```

* 4. package.json设置
```json
  "scripts": {
    "dev": "webpack --config ./webpack.dev.config.js --mode development",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

* 5. 运行
`npm run dev`

* 6. 安装webpack-dev-server html-webpack-plugin
`npm i webpack-dev-server html-webpack-plugin --save-dev`

* 7. 新建html

* 8. 修改webpack设置
```js
// webpack.dev.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // ...省略
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, './release'), // 根目录
    open: true, // 自动打开浏览器
    port: 9000
  }
}
```

* 9. 调整package.json设置
```json
// package.json
  "scripts": {
    "dev": "webpack-dev-server --config ./webpack.dev.config.js --mode development",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

* 10. 解析es6，相关插件安装
`npm i babel-core babel-loader babel-polyfill babel-preset-es2015 babel-preset-latest --save-dev`

* 11. .babelrc设置
```js
{
  "presets": ["es2015", "latest"],
  "plugins": []
}
```

* 12.  webpack设置调整
```js
// webpack.dev.config.js
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    }]
  },
```

* 13. index.js使用ES6语法

* 14. 运行测试

* 15. babel报错解决
> Error: Cannot find module '@babel/core' 回退低版本
`npm install -D babel-loader@7 babel-core babel-preset-env`

## git 远程分支上传
```
git remote add origin https://github.com/wp360/es6.git

git checkout -b design-pattern

git status

git add .

git commit -m "初始化"

git push

git push --set-upstream origin design-pattern
```