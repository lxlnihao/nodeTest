//https://www.jianshu.com/p/a6d430a00242
var express = require('express');
const req = require('express/lib/request');
var app = express();
// var mysql = require('liu_mysql')
app.set('views','views');
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.get('/', function(res, rep) {
    // rep.send('Hello, word!这里是node');
    rep.render('index');
});
app.get('/contact', function(res, rep) {
    // rep.send('Hello, word!这里是api接口');
    rep.render('contact');
});
app.get('/json', function(res, rep) {
    // rep.send('Hello, word!这里是api接口');
    // rep.render('contact');
    rep.json({name:'小明',price:90});
});
app.listen(3000);
