// localhost:3000/about - everything's good 
// localhost:3000/about/ - no styles, page looks busted
var http = require('http');
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if(req.url === '/301') {
    res.writeHead(301, {'Location':'/200'}); 
    res.end('' + res.statusCode);
    console.log('should have gotten 301, but sometimes browser caches');
  } else if(req.url === '/200') {
    res.writeHead(200); 
    res.end('' + res.statusCode);
  } else {
    res.writeHead(404); 
    res.end('' + res.statusCode);
  }
  console.log(res.statusCode);

}
server.listen(3000);
