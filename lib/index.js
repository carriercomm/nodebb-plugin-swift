var Highlight = require('./highlight');
var hljs = new Highlight();
hljs.registerLanguage('javascript', require('./languages/javascript.js'));
hljs.registerLanguage('php', require('./languages/php.js'));
hljs.registerLanguage('swift', require('./languages/swift.js'));
module.exports = hljs;