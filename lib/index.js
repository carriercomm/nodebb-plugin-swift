var Highlight = require('./highlight');
var hljs = new Highlight();
hljs.registerLanguage('swift', require('./languages/swift.js'));
module.exports = hljs;