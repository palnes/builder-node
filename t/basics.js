// testing/nodeunit_basics.js
var fs = require('fs');
module.exports = {
    'grunt generates compiled files' : function(test) {
        test.expect(4);
        test.ok(fs.exists('./static/css/main.css'));
        test.ok(fs.exists('./static/index.html'));
        test.ok(fs.exists('./static/js/main.min.js'));
        test.ok(fs.exists('./static/js/jquery.min.js'));
        test.done();
    },
};
