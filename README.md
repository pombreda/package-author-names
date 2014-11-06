# package-author-names

[![Build Status](https://travis-ci.org/shinnn/package-author-names.svg?branch=master)](https://travis-ci.org/shinnn/package-author-names)
[![Build status](https://ci.appveyor.com/api/projects/status/41pq4br2j44la2ch?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/package-author-names)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/package-author-names.svg)](https://coveralls.io/r/shinnn/package-author-names)
[![Dependency Status](https://david-dm.org/shinnn/package-author-names.svg)](https://david-dm.org/shinnn/package-author-names)
[![devDependency Status](https://david-dm.org/shinnn/package-author-names/dev-status.svg)](https://david-dm.org/shinnn/package-author-names#info=devDependencies)

Extract author names from package data

```javascript
var pkg = {
  name: 'foo',
  version: '1.0.0',
  description: 'Lorem ipsum dolor sit amet',
  authors: [
    'Bob <foo@email> (bar.com)',
    {
      name: 'Sue'
    }
  ]
};

packageAuthorNames(pkg); //=> ['Bob', 'Sue']
```

It supports [package.json](https://www.npmjs.org/doc/files/package.json.html) and [bower.json](https://github.com/bower/bower.json-spec).

## Installation

### Package managers

#### [npm](https://www.npmjs.org/) [![NPM version](https://badge.fury.io/js/package-author-names.svg)](https://www.npmjs.org/package/package-author-names)

```sh
npm install package-author-names
```

#### [bower](http://bower.io/) [![Bower version](https://badge.fury.io/bo/package-author-names.svg)](https://github.com/shinnn/package-author-names/releases)

```sh
bower install package-author-names
```

#### [Duo](http://duojs.org/)

```javascript
var packageAuthorNames = require('shinnn/package-author-names');
```

### Standalone

[Download the script file directly](https://raw.githubusercontent.com/shinnn/package-author-names/master/package-author-names.js) and install the dependency.

#### Dependency

* [parse-author-name](https://github.com/shinnn/parse-author-name.js)

## API

### packageAuthorNames(*packageData*)

*packageData*: `Object`  
Return: `Array` of `String`

It returns an array of author names specified in the `author` and `authors` properties of its first argument.

```javascript
var packageAuthorNames = require('package-author-names');

var pkg = require('./package.json');
packageAuthorNames(pkg); //=> ['Shinnosuke Watanabe']
```

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
