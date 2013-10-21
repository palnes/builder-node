// testing/nodeunit_basics.js
var fs = require('fs');
module.exports = {
    'true is true' : function(test) {
        test.expect(1);
        test.ok(true);
        test.done();
    },
    '1 equals 1' : function(test) {
        test.expect(1);
        test.equal(1,1);
        test.done();
    },
};
