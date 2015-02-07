'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.initConfig({
    jshint: {
      all: ['*.js'],
      options: {
        jshintrc: true
      }
    },
    jscs: {
      src: ['*.js', 'server.js'],
      options: {
        config: '.jscsrc'
      }
    }
  });

  grunt.registerTask('default', ['jshint, jscs']);
};
