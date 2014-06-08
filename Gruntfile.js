'use strict';

module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		connect: {
	    server: {
	      options: {
	        port: 9001,
	        hostname: '127.0.0.1',
	        keepalive: true
	      }
	    }
		}
	});

	grunt.registerTask('default', ['serve']);
	grunt.registerTask('serve', ['connect']);
  grunt.registerTask('build', ['clean', 'jshint', 'concat', 'uglify', 'copy']); // add these later
};
