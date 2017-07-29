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