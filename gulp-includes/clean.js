'use strict';

var clean = require('gulp-clean');

module.exports = function(gulp) {
  gulp.task('clean', function() {
    return gulp.src(['.tmp', 'dist'], {read: false})
      .pipe(clean());
  });
};
