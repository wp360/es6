import gulp from 'gulp';//引入gulp
import gulpif from 'gulp-if';//gulp的语句中处理if判断的包
import liveserver from 'gulp-live-server';//插件：方便的，轻量级的服务器
import args from './util/args';//命令行参数进行解析的包

gulp.task('serve',(cb)=>{
    //如果不是监听的使用回调函数
    if(!args.watch) return cb();
    //如果是监听的创建一个服务器，运行server/bin/www.js
    var server = liveserver.new(['--harmony','server/bin/www']);
    server.start();//启动服务器
    //监听server/public/js  /ejs
    gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
        server.notify.apply(server,[file]);//通知服务器做相应的反应
    });
    //监听到路由变化后是服务重启
    gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
        server.start.bind(server)();
    });
});