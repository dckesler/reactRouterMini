var express = require("express");
var app = express();
var port = 8335;

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
  console.log("Listening on ", port);
})
