//Free Code Camp request header parser API project
var express = require("express");
var app = express();
var useragent = require('express-useragent');

app.enable('trust proxy');
app.use(useragent.express());

app.get('/', function(req, res){
    var userIP = req.ip;
    //var userIP = req.header('x-forwarded-for');
    var userLang = req.headers["accept-language"].substring(0,5);
    var userOS = req.useragent['os'];
    
    var response = {ipaddress: userIP, language: userLang, software: userOS};
    
    res.send(response);
});

app.listen(8080, function () {
  console.log('Request Header Parser app listening on port 8080!');
});