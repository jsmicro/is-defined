'use strict';

const $ = require('../main');

const test = require('jsmicro-test');

// Call function to give arguments
StartTest('first', 2, ['thrid']);

function StartTest() {
    let undef;
    let def = 'Defined String';

    // Run the isDefined() Test.
    test($.isDefined)
        .accept(def)
        .reject(undef)
        .queue(true);

    // Run the isNotDefined() Test.
    test(isNotDefined)
        .accept(undef)
        .reject(def)
        .queue(true);
}
