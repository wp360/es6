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

## UML类图
> Unified Modeling Language 统一建模语言

* 画图工具（MS Office Visio、www.processon.com)

## 设计原则

* 描述
```
按照某种思路或者标准来实现功能
功能相同，可以有不同的设计方案来实现
伴随着需求增加，设计的作用才能体现出来
```

## UNIX / LINUX 设计哲学

* 准则1. 小即是美

* 准则2. 让每个程序之做好一件事

* 准则3. 快速建立原型

* 准则4. 舍弃高效率而取可移植性

* 准则5. 采用纯文本来存储数据

* 准则6. 充分利用软件的杠杆效应(软件复用)

* 准则7. 使用 shell 脚本来提高杠杆效应和可移植性

* 准则8. 避免强制性的用户界面

* 准则9. 让每个程序都称为过滤器

#### 小准则

* 允许用户定制环境

* 尽量是操作系统内核小而轻量化

* 使用小写字母并尽量简写

* 沉默是金

* 各部分之和大于整体

* 寻求90%的解决方案(2/8定律)

## SOLID设计五大原则

* S(Single-Resposibility Principle): 单一职责原则

* O(Open-Closed principle): 开放封闭原则

* L(Liskov-Substituion Principle): 李氏替换原则

* I(Interface-Segregation Principle): 接口隔离原则

* D(Dependecy-Inversion Principle): 依赖倒置原则


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