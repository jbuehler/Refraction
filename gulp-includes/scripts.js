'use strict';

var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');

module.exports = function(gulp) {
	gulp.task('scripts:dev', function() {
		var bundler = watchify(browserify('./public/scripts/main.js', { debug: true }).transform(babel));

		function rebundle() {
			return bundler.bundle()
	      .on('error', function(err) { console.error(err); this.emit('end'); })
	      .pipe(source('game.js'))
	      .pipe(buffer())
	      .pipe(sourcemaps.init({ loadMaps: true }))
	      .pipe(sourcemaps.write('./'))
	      .pipe(gulp.dest('./js'));
    }

		bundler.on('update', rebundle);
		return rebundle();
	});
};
