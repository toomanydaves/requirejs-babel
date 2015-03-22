({
    'baseUrl': './',

    'name': 'src/index',
    'out': 'main-built.js',

    'paths': {
        'babel': '../babel-4.6.6.min',
        'es6': '../es6'
    },

    'exclude': ['babel'],

    'optimize': 'none',

    'pragmasOnSave': {
        'excludeBabel': true
    }
})