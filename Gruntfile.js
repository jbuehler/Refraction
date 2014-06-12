'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var folderMount = function folderMount(connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		connect: {
	    dev: {
	      options: {
	        port: 9001,
	        hostname: 'localhost',
	        middleware: function (connect) {
		        return [lrSnippet, folderMount(connect, '.')];
					}
	      }
	    }
		},
		watch: {
      scripts: {
        files: ['public/**/*.js'],
        options: {
          livereload: true
        },
        tasks: ['browserify']
      }
    },
		browserify: {
			dev: {
				options: {
					bundleOptions: { debug: true }
				},
				src: ['public/scripts/main.js'],
				dest: 'dist/js/game.js'
      },
      production: {
				src: ['public/scripts/main.js'],
				dest: 'dist/js/game.js'
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish'),
        force: false
      },
      all: [
        'Gruntfile.js',
        './public/scripts/{,*/}*.js'
      ],
		}
	});

	grunt.registerTask('default', ['serve']);
	grunt.registerTask('serve', ['browserify:dev', 'connect:dev', 'watch']);
  grunt.registerTask('build', ['browserify:production', 'clean', 'jshint', 'concat', 'uglify', 'copy']);
};
