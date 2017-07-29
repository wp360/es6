import gulp from 'gulp';//引入gulp
import gulpSequence from 'gulp-sequence';//任务之间的关联关系

gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));