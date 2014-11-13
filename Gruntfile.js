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
		        return [lrSnippet, folderMount(connect, 'dist')];
					}
	      }
	    }
		},
		watch: {
      scripts: {
        files: ['public/**/**/*.js'],
        options: {
          livereload: true
        },
        tasks: ['browserify']
      }
    },
    copy: {
      dist: {
        files: [
          { expand: true, cwd: 'public/images/', src: '**', flatten: true, filter: 'isFile', dest: 'dist/images' },
          // { expand: true, flatten: true, src: ['game/plugins/*.js'], dest: 'dist/js/plugins/' },
          { expand: true, flatten: true, src: ['public/styles/*'], dest: 'dist/styles' },
          { expand: true, src: ['index.html'], dest: 'dist/' }
        ]
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
        // reporter: require('jshint-stylish'),
        force: false
      },
      all: [
        'Gruntfile.js',
        './public/scripts/{,*/}*.js'
      ],
		},
		cordovacli: {
			options: {
				path: 'build'
			}
		},
    cordova: {
      options: {
        command: ['create','platform','plugin','build'],
        platforms: ['ios','android'],
        plugins: ['device','dialogs'],
        path: 'build',
        id: 'io.brolific.refraction',
        name: 'Refraction'
      }
    },
    create: {
      options: {
        command: 'create',
        id: 'com.brolific.refraction',
        name: 'Refraction'
      }
    },
    add_platforms: {
			options: {
        command: 'platform',
        action: 'add',
        platforms: ['ios', 'android']
      }
    },
    build_ios: {
      options: {
        command: 'build',
        platforms: ['ios']
      }
    },
    build_android: {
      options: {
        command: 'build',
        platforms: ['android']
      }
    },
	});

	grunt.registerTask('default', ['serve']);
	grunt.registerTask('serve', ['browserify:dev', 'copy', 'connect:dev', 'watch']);
  grunt.registerTask('build', ['browserify:production', 'clean', 'jshint', 'concat', 'uglify', 'copy', 'cordovacli']);
};
