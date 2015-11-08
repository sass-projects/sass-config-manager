'use strict';
//concat config

var fs = require('fs'),
    srcFiles = [
            'src/scss/utils/*.scss',
            'src/scss/helpers/*.scss',
            'src/scss/functions/*.scss',
            'src/scss/mixins/*.scss'
    ],
    processFunc = function(src, filepath) {
        src = src.replace(/(^|\n)[ \t]*(@charset "UTF-8";);?\s*/g, '$1');
        src = src.replace(/(^|\n)[ \t]*(@import ([^)]*)\;);?\s*/g, '');

        return src;
    };

module.exports = {
    dist: {
        options: {
            // Replace all 'use strict' statements in the code with a single one at the top
            banner: fs.readFileSync('./banner.txt', 'utf8'),
            process: processFunc
        },
        src: srcFiles,
        dest: 'dist/_config-manager.scss',
    },
    test: {
        options: {
            // Replace all 'use strict' statements in the code with a single one at the top
            banner: fs.readFileSync('./banner.txt', 'utf8'),
            process: processFunc
        },
        src: srcFiles,
        dest: 'tests/specs/_config-manager.scss',
    }
};
