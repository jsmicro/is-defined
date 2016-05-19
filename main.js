'use strict';

if (!global.hasOwnProperty('isDefined')) global.isDefined = isDefined;
if (!global.hasOwnProperty('isNotDefined')) global.isNotDefined = isNotDefined;

/**
 * Check does the given javascript object is a Defined.
 *
 * @param {*} object - Javascript object (array, object, string, etc) to check the type from.
 * @returns {boolean}
 */
function isDefined(object) {
    return 'undefined' !== typeof object;
}

/**
 * Check does the given javascript object is not a Defined.
 *
 * @param {*} object - Javascript object (array, object, string, etc) to check the type from.
 * @returns {boolean}
 */
function isNotDefined(object) {
    return !isDefined(object);
}

module.exports = {isDefined, isNotDefined};
