import gulp from 'gulp';
import del from 'del';
import args from './util/args';

//创建清空任务
gulp.task('clean',()=>{
    return del(['server/public','server/views']);
});