// testing/nodeunit_basics.js
var fs = require('fs');
module.exports = {
    'grunt generates css' : function(test) {
        test.expect(1);
        test.ok(fs.existsSync('./static/css/main.css'));
        test.done();
    },
    'grunt minifies HTML' : function(test) {
        test.expect(1);
        test.ok(fs.existsSync('./static/index.html'));
        test.done();
    },
    'grunt uglifies JavaScript' : function(test) {
        test.expect(2);
        test.ok(fs.existsSync('./static/js/main.min.js'));
        test.ok(fs.existsSync('./static/js/jquery.min.js'));
        test.done();
    },
};
