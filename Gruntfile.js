'use strict';

var LIVERELOAD_PORT = 35729;

module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		connect: {
	    client: {
	      options: {
	        port: 9001,
	        hostname: 'localhost'
	      }
	    }
		},
		watch: {
      client: {
        files: ['public/**/*.js'],
        options: {
          spawn: false,
          livereload: LIVERELOAD_PORT
        },
        tasks: ['browserify']
      }
    },
		browserify: {
			options: {
				bundleOptions: { debug: true }
			},
      build: {
        src: ['public/scripts/main.js'],
        dest: 'dist/js/game.js'
      }
    }
	});

	grunt.registerTask('default', ['serve']);
	grunt.registerTask('serve', ['browserify', 'connect:client', 'watch:client']);
  grunt.registerTask('build', ['clean', 'jshint', 'concat', 'uglify', 'copy']);
};
