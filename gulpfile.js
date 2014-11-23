// core
var gulp = require('gulp');
var del = require('del');

// plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');

// clean up
gulp.task('clean', function () {
  del(['dist']);
});

// copy html files
gulp.task('html', function () {
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('js', function () {
  return gulp.src(['app/bower_components/jquery/dist/*.min.js',
    'app/bower_components/bootstrap/dist/js/*.min.js',
    'app/js/*.js'])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('css', function () {
  return gulp.src(['app/bower_components/bootstrap/dist/css/*.min.css', 'app/css/*.css'])
    .pipe(concat('style.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('fonts', function () {
  return gulp.src('app/bower_components/bootstrap/dist/fonts/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('images', function () {
  return gulp.src('app/img/*')
    .pipe(gulp.dest('dist/img'));
});

gulp.task('default', ['clean', 'html', 'js', 'css', 'images', 'fonts']);
