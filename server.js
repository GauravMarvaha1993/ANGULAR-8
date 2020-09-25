var http = require('http');
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/dist/AngularApp')));

//Other routes here
app.get('*', function (req, res) {
    res.send(path.join(__dirname, '/dist/AngularApp/index.html'))
});

let listener = app.listen(3000, function (req, res) {
    console.log("server is running fine.....");
    console.log(listener.address().port);
    console.log('Log Printing');
});