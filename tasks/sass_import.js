'use strict';
//sass_import config

module.exports = {
    dev: {
        options: {
            basePath: ''
        },
        files: {
            'tests/specs/include.scss': [
                'src/scss/utils/*',
                'tests/specs/scss/*'
            ]
        }
    },
};
