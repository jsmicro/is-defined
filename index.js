(function() {
    'use strict';

    if (!window.hasOwnProperty('isDefined')) window.isDefined = isDefined;
    if (!window.hasOwnProperty('isNotDefined')) window.isNotDefined = isNotDefined;

    function isDefined(object) {
        return 'undefined' !== typeof object;
    }

    function isNotDefined(object) {
        return !isDefined(object);
    }
})();
