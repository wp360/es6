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

## 面向对象

* 1. 三要素 - 继承
```js
// 父类
class People {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  eat() {
    alert(`${this.name} eat something`)
  }

  speak() {
    alert(`My name is ${this.name}, age ${this.age}`)
  }
}


// 子类继承父类
class Student extends People {
  constructor(name, age, number) {
    super(name, age)
    this.number = number
  }

  study() {
    alert(`${this.name} study`)
  }
}

let student1 = new Student('xiaoming', 10, 'A1')
student1.study()
alert(student1.number)
student1.eat()

let student2 = new Student('xiaohong', 12, 'A2')
student2.study()
student2.speak()
```

> People是父类，公共的，不仅仅服务于Student
> 继承可将公共方法抽离出来，提高复用，减少冗余

* 2. 三要素 - 封装
```
· public 完全开放
· protected 对子类开放
· private 对自己开放
```

> 减少耦合，不该外漏的不外漏
> 利于数据、接口的权限管理
> ES6目前不支持，一般认为_开头的属性是private

* 3. 三要素 - 多态
```
· 同一个接口，不同表现
· JS应用极少
· 需要结合java等语言的接口、重写、重载等功能
```

> 为何使用面向对象？
```
程序执行： 顺序、判断、循环 —— 结构化
面向对象 —— 数据结构化
对于计算机， 结构化的才是最简单的
编程应该 简单&抽象
```

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