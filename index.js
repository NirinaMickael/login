var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.sendFile(process.cwd()+"/views/login.html")
  });
  
  app.listen(4000, function () {
    console.log("l'application se lance!");
  });