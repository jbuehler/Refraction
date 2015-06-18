'use strict';

var gulp = require('gulp');

var src = {
  public: './public/',
  dist: './dist/'
};

require('./gulp-includes/scripts')(gulp);
require('./gulp-includes/clean')(gulp);
//require('./gulp-includes/copy')(gulp);

gulp.task('default', ['clean', 'scripts:dev'], function() {
  gulp.watch(src.public + '**/**/*.js', ['scripts:dev']);
});
