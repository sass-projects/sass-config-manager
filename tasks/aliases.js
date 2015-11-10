
module.exports = {
    'test' : [
        'scsslint',
        'concat:test',
        'mochacli'
    ],
    'default': [
        'test',
        'concat:dist',
        'sassdoc'
    ]
};
