'use strict';

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
      }
    }
	});

	grunt.registerTask('default', ['serve']);
	grunt.registerTask('serve', ['browserify', 'connect:client', 'watch']);
  grunt.registerTask('build', ['browserify:production', 'clean', 'jshint', 'concat', 'uglify', 'copy']);
};
