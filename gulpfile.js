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

gulp.task('lint', function() {
  return gulp.src('app/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('js', function () {
  return gulp.src(['app/bower_components/jquery/dist/*.min.js',
    'app/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
    'app/js/*.js'])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('sass', function () {
  return gulp.src(['app/css/style.scss'])
    .pipe(sass())
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

gulp.task('watch', function() {
  gulp.watch('app/js/*.js', ['js']);
  gulp.watch('app/css/*.scss', ['sass']);
});

gulp.task('build', ['html', 'lint', 'js', 'sass', 'images', 'fonts']);

gulp.task('default', ['clean', 'build']);
