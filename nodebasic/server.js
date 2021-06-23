var http = require('http');
var evaluate = require('./evaluate');  //----modules
var custom = require('./custom');       //-----modules  

function onrequest (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.write('\n'+evaluate.sum(4,5));
  res.write('\n'+evaluate.str);
  res.write('\n'+evaluate.mul(5,5));
  res.write('\n'+evaluate.str1);
  res.write('\n'+custom.dt());
  res.end();
} 

http.createServer(onrequest).listen(8080);
console.log("server created");