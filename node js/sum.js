var http = require('http');
var sample = require('./sample');
http.createServer(function (req,res){
  res.writeHead(200, {'content-type':'text/html'});
  res.write("Sum of two number = "+  sample.sumAvg(123,321));
  res.end();

}).listen(8080);
