'use strict';

var gulp = require('gulp');

var src = {
  public: './public/',
  dist: './dist/'
};

require('./gulp-includes/scripts')(gulp);

gulp.task('default', ['scripts:dev'], function() {
  gulp.watch(src.public + '**/**/*.js', ['scripts:dev']);
});
