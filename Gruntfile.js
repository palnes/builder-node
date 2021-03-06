/*jshint indent:2 */


module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['static'],
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },

    htmlmin: {
      dist: {
        files: {
          'static/index.html': 'app/html/index.html' // 'destination': 'source'
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'app/js/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    bower: {
      install: {
        options: {
          copy: false
        }
      }
    },
    qunit: {
      all: ['test/**/*.html']
    },
    uglify: {
      dist: {
        files: {
          'static/js/jquery.min.js': 'bower_components/jquery/jquery.js',
          'static/js/main.min.js': 'app/js/main.js'
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  // Load grunt plugins/tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bower-task');


  // Bundle tasks
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['bower:install', 'jshint', 'uglify', 'compass', 'htmlmin']);
};