/*!
 * jn-merge <https://github.com/jnxyx/jn-merge>
 *
 * Copyright (c) 2016-2017, Yun Xiang Xu.
 * Licensed under the MIT License.
 */
var each = require('jn-each')
module.exports = function jnCopy(obj) {

    var args = Array.prototype.slice.call(arguments, 0);
    args.unshift({});

    return extend.apply(null, args);
}