var express = require('express');
var app = express();

var root = __dirname;

app.use(express.static('public'));

app.listen(3000, function(){
    console.log('Server succsesfully created');
});

