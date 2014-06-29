(function(module) {
    "use strict";
    var hljs = require('./lib');
    var Swift = {};
    Swift.parse = function(postContent, callback) {
        var re = /(<pre><code class="lang-swift">.*[\s\S]*?<\/code><\/pre>)/gmi;
        var arr = postContent.match(re);
        if(arr && arr.length){
            re = /(<pre><code class="lang-swift">)(.*[\s\S]*?)(<\/code><\/pre>)/gmi
            arr.forEach(function (value) {
                var code = value.replace(re, '$2');
                var letter = {
                    '&amp;' : '&',
                    '&gt;' : '>',
                    '&lt;' : '<',
                    '&quot;' : '"',
                    '&#39;' : "'"
                };
                code = code.replace(/(&amp;)|(&gt;)|(&lt;)|(&quot;)|(&#39;)/gmi,function($0){
                    return letter[$0];
                })
                var highlightedCode = hljs.highlight('swift',code).value;
                postContent = postContent.replace(value, '<pre><code class="hljs swift">'+highlightedCode+'</code></pre>');
            });
        }
        callback(null, postContent);
    };

    module.exports = Swift;
}(module));