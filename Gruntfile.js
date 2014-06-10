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
      client: {
        files: ['public/**/*.js'],
        options: {
          spawn: false,
          livereload: true
        },
        tasks: ['browserify:dev']
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
	grunt.registerTask('serve', ['browserify', 'connect:client', 'watch:client']);
  grunt.registerTask('build', ['browserify:production', 'clean', 'jshint', 'concat', 'uglify', 'copy']);
};
