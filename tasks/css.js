import gulp from 'gulp';//引入gulp
import gulpif from 'gulp-if';//gulp的语句中处理if判断的包
import livereload from 'gulp-livereload';//热更新包即浏览器不刷新自动更新的
import args from './util/args';//命令行参数进行解析的包

gulp.task('css',()=>{
    return gulp.src('app/**/*.css')
    .pipe(gulp.dest('server'));
    //.pipe(gulpif(args.watch,livereload()))
});