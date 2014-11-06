'use strict';

var requireBowerFiles = require('require-bower-files');
var test = require('tape');

function runTest(description, main) {
  test(description, function(t) {
    t.plan(13);

    t.deepEqual(
      main({author: 'Bob <foo@email> (bar.com)'}), ['Bob'],
      'should parse author name.'
    );

    t.deepEqual(
      main({authors: ['Bob', 'Sue']}), ['Bob', 'Sue'],
      'should parse author names.'
    );

    t.deepEqual(
      main({author: {name: 'Bob', url: 'foo.com'}}), ['Bob'],
      'should parse author name from an object.'
    );

    t.deepEqual(
      main({authors: [{name: 'Bob'}, {name: 'Sue'}]}), ['Bob', 'Sue'],
      'should parse author names from an array of objects.'
    );

    t.deepEqual(
      main({}), [],
      'should return `[]` when it takes an object which has no author-related properties.'
    );

    t.throws(
      main.bind(null, {authors: 'Bob'}), /must be an array of string/,
      'should throw a type error when the authors property is not an array.'
    );

    t.throws(
      main.bind(null, {author: '<foo.com>'}), /Cannot parse name from/,
      'should throw a type error when it cannot parse author name from contact info.'
    );

    t.throws(
      main.bind(null, {author: {url: 'foo.com'}}), /must have `name` property/,
      'should throw a type error when the object doesn\'t have `name` property.'
    );

    t.throws(
      main.bind(null, {authors: []}), /must have more than one element/,
      'should throw an error when the `authors` property is an empty array.'
    );

    t.throws(
      main.bind(null, {authors: [{name: ['Bob']}]}), /`name` property must be a string/,
      'should throw a type error when the `name` property is not a string.'
    );

    t.throws(
      main.bind(null, {authors: ['Bob', 1]}), /Every author must be a string or an object/,
      'should throw a type error when the `authors` property includes invalid values.'
    );

    t.throws(
      main.bind(null), /TypeError/,
      'should throw a type error when it takes no arguments.'
    );

    t.throws(
      main.bind(null, null), /TypeError/,
      'should throw a type error when it takes non-object value.'
    );
  });
}

runTest('require(\'package-license-types\')', require('./'));

global.window = {};
requireBowerFiles({self: true});

runTest('window.packageAuthorNames', window.packageAuthorNames);
