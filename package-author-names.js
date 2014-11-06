/*!
 * package-author-names | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/package-author-names
*/

window.packageAuthorNames = function packageAuthorNames(pkg) {
  'use strict';

  var authors = [];

  if (pkg.author) {
    authors = [pkg.author];
  } else if (pkg.authors) {
    if (!Array.isArray(pkg.authors)) {
      throw new TypeError('`authors` property must be an array of string.');
    }
    if (pkg.authors.length === 0) {
      throw new Error('`authors` property must have more than one element.');
    }
    authors = pkg.authors;
  }

  return authors.reduce(function(result, author) {
    var name;
    if (typeof author === 'string') {
      name = window.parseAuthorName(author);
      if (!name) {
        throw new Error('Cannot parse name from ' + author + '.');
      }
    } else if (author && typeof author === 'object' && !Array.isArray(author)) {
      if (author.name === undefined) {
        throw new TypeError('The object must have `name` property.');
      }
      if (typeof author.name !== 'string') {
        throw new TypeError('`name` property must be a string.');
      }
      name = author.name;
    } else {
      throw new TypeError('Every author must be a string or an object.');
    }

    result.push(name);

    return result;
  }, []);
};
