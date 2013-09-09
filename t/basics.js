// testing/nodeunit_basics.js
var fs = require('fs');
module.exports = {
    'grunt generates compiled files' : function(test) {
        test.expect(1);
        test.ok(fs.existsSync('./static/css/main.css'));
        test.ok(fs.existsSync('./static/index.html'));
        test.ok(fs.existsSync('./static/js/main.min.js'));
        test.ok(fs.existsSync('./static/js/jquery.min.js'));
        test.done();
    },
};
