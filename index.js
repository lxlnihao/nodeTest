var express = require('express');
var app = express();

app.get('/', function(res, rep) {
    rep.send('Hello, word!这里是node');
});

app.listen(3000);