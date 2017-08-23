# es6
## ES6 Project
`创建文件夹app、server、tasks`
`app文件夹下生成css、js、views`
## server文件夹下 构建脚手架
>`express -e .`

>`npm install`
## 环境搭建
[参考链接](http://blog.csdn.net/qq_29676303/article/details/76098196)
## 安装scripts.js 中的依赖包用空格隔开
`npm install gulp gulp-if gulp-concat webpack webpack-stream vinyl-named gulp-livereload gulp-plumber gulp-rename gulp-uglify gulp-util yargs --save-dev`

## 创建浏览器监听并自动编译的脚本tasks/browser.js
## 创建编译文件清除的脚本（当每次文件修改时进行旧的文件清除）
`npm install gulp-live-server del gulp-util --save-dev`
`npm install gulp-sequence babel-loader babel-core babel-preset-env --save-dev`
`npm install require-dir --save-dev`
## 配置 .babelrc 如下 同时安装依赖包
`npm install babel-preset-es2015 --save-dev`
## 页面自动刷新
`npm install connect-livereload --save-dev`
`npm install babel-polyfill --save-dev`

## 接口封装
```javascript
1. 期号、倒计时、销售状态；
2. 遗漏；
3. 奖号（每十分钟开奖一次）
相关知识点：
① 定义类
② Promise实例
var promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
③ Call 方法和 Apply 方法
Call方法：
语法：call(thisObj[,arg1,arg2,...,argN])
定义：调用对象的一个方法，用另一个对象替换当前对象

Apply方法：
语法：apply([thisObj,argArray])
定义：应用某一个对象的一个方法，用另一个对象替换当前对象
[参考](http://es6.ruanyifeng.com/)
```
## 计算玩法
```javascript
1. 玩法排列组合
```