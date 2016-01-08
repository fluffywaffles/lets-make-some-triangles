var gulp = require('gulp')
  , $    = require('gulp-load-plugins')()

gulp.task('jade', function () {
  gulp.src('*.jade')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.jade({ pretty: true }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', function () {
  gulp.watch('**/*.jade', ['jade'])
})

gulp.task('default', ['watch'])
