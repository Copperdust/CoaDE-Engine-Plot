var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var watch = require('gulp-watch');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

gulp.task('default', ['watch']);

gulp.task('watch', function() {
  gulp.watch('./**/*.less', ['less']);
});

gulp.task('less', function () {
  return gulp.src('./assets/src/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ],
      plugins: [autoprefix],
    }))
    .pipe(gulp.dest('./assets/build/css'));
});