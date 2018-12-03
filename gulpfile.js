/*
 * @Author: jzh
 * @Date: 2018-12-03 09:01:22 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-12-03 09:20:55
 */
var gulp = require('gulp');

var sass = require('gulp-sass');

var minCss = require('gulp-clean-css');

var server = require('gulp-webserver');

//编译scss
gulp.task('devScss', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(minCss())
        .pipe(gulp.dest('./src/css'))
})

//起服务
gulp.task('browserSync', function() {
    return gulp.src('./src')
        .pipr(server({
            port: 3039,
        }))
})