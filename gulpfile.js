/*
 * @Author: jzh
 * @Date: 2018-12-03 09:01:22 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-12-03 09:36:22
 */
var gulp = require('gulp');

var sass = require('gulp-sass');

var minCss = require('gulp-clean-css');

var server = require('gulp-webserver');

var uglify = require('gulp-uglify');

var fs = require('fs');

var url = require('url');

var path = require('path');

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
        .pipe(server({
            port: 3039,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                console.log(pathname);

                pathname = pathname === './' ? 'index.html' : pathname;

                res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
            }
        }))
})

//监听
gulp.task('watch', function() {
    return gulp.watch('./src/scss/*.scss', gulp.series('devScss'));
})