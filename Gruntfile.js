// Gruntfile.js
'use strict';

module.exports = function(grunt) {
    var path = require('path');

    // measures the time each task takes
    require('time-grunt')(grunt);

    require('jit-grunt')(grunt, {
        scsslint: 'grunt-scss-lint',
        mochacli: 'grunt-mocha-cli'
    });

    // load grunt config
    require('load-grunt-config')(grunt, {

        // path to task.js files, defaults to grunt dir
        configPath: [
            path.join(process.cwd(), 'tasks'),
        ],

        // There are certain scenarios where you might have a base config for your team,
        // and you want to be able to override some of the config based on your personal setup.
        //overridePath: [],

        // auto grunt.initConfig
        init: true,

        // data passed into config. Can use with <%= test %>
        //data: {},

        // can optionally pass options to load-grunt-tasks.
        // If you set to false, it will disable auto loading tasks.
        jitGrunt: {
            customTasksDir: 'tasks'
        },

        //can post process config object before it gets passed to grunt
        //postProcess: function() {},

        //allows to manipulate the config object before it gets merged with the data object
        //preMerge: function() {}
    });
};
