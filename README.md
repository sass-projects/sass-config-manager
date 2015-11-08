# sass-config-manager

[![Author](http://img.shields.io/badge/author-@anolilab-blue.svg?style=flat-square)](https://twitter.com/anolilab)
[![devDependency Status](https://david-dm.org/growcss/sass-config-manager/dev-status.svg?style=flat-square)](https://david-dm.org/growcss/sass-config-manager#info=devDependencies)
[![npm](https://img.shields.io/npm/v/growcss-sass-config-manager.svg?style=flat-square)](https://www.npmjs.com/package/growcss-sass-config-manager)
[![Bower](https://img.shields.io/bower/v/sass-config-manager.svg?style=flat-square)](https://github.com/growcss/sass-config-manager)
[![GitHub release](https://img.shields.io/github/release/sass-projects/sass-config-manager.svg?style=flat-square)](https://github.com/sass-projects/sass-config-manager/releases)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

## Master
[![Build Status](https://travis-ci.org/sass-projects/sass-config-manager.svg?branch=master)](https://travis-ci.org/sass-projects/sass-config-manager)

### Bits and Pieces:
* [npm:](https://npmjs.org/) Well... it's a Node.js package manager
* [Grunt:](http://gruntjs.com/) Automates common tasks: test, build, clean
* [Bower:](http://bower.io/) Package manager for browser dependencies
* [Hound:](https://houndci.com/) Hound comments on style violations in GitHub pull requests

## Getting Started:

1. You need to have npm installed (it comes with node)
2. Clone this repository: `git clone git@github.com:anolilab/skeljs.git`
3. Install dependencies: `npm install`

## Install

~~~
npm install
grunt
~~~

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Testing

~~~
grunt test
~~~

## How to

### Usage
If you like to use config-mangers global variables, set
~~~scss
$config-manger-variables: global;
~~~
before you include config-manger.

Include this library. If you use bower ``@import 'bower_components/sass-config-manager/src/scss/config-manager';`` or ``@import 'node_modules/growcss-sass-config-manager/src/scss/config-manager';``

### Set default settings
~~~scss
// Default configuration settings
// Passing true to the 3rd parameter,
// the value is assigned to the configuration path as the default
@include config-set('color.black', #000, true);
@include config-set('color.white', #fff, true);
@include config-set('single-key', red, true);

// or assign values to a configuration path by using Map
@include config-set('color', (black: #000, white: #fff), true);
~~~

### Get your settings
~~~scss
body {
    color: config-get('color.black');  // #000
    background-color: config-get('color.white');  // #fff
}
~~~

### Compatibility
~~~scss
// Variables
$color-black: #000 !default;
$color-white-bg: #fff !default;

$color: (
    fg: $color-black,
    bg: $color-white-bg
) !default;

// config-set()
@include config-set('color', $color, true);

body {
    color: config-get('color.fg');  // #666666
    background-color: config-get('color.bg');  // white
}
~~~

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security

If you discover any security related issues, please email d.bannert@anolilab.de instead of using the issue tracker.

## Credits

- [Daniel Bannert](https://github.com/growcss)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
