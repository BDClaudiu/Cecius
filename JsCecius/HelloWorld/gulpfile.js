'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
 
sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('src/res/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/res/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.sass', ['sass']);
});

gulp.task('minifycss', function () {
  gulp.src('./dist/res/css/*.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/res/css/minify'));
});
