var http = require('http');
var url = require('url');
var monk = require('monk');

var server = http.createServer(function (req, res) {
  if(req.method != 'GET'){
    return res.end('Send me a GET\n');
  }
  res.writeHead(200, {'Content-Type':'application/json'});
  var urlKeys = url.parse(req.url, true);
  // so I want the pathname of /api/parsetime
  // and query of {iso: 'string to be split'}
  //console.log(urlKeys.query.iso);
  // and also to respond differently to /api/unixtime
  var jsonResponse = {};

  if (urlKeys.pathname == '/api/parsetime') {
    var tmpDate = new Date(urlKeys.query.iso);
      //console.log(tmpDate)
    jsonResponse.hour = tmpDate.getHours();
    jsonResponse.minute = tmpDate.getMinutes();
    jsonResponse.second = tmpDate.getSeconds();
      //console.log(jsonResponse);
    res.end(JSON.stringify(jsonResponse));
  }
  if (urlKeys.pathname == '/api/unixtime') {
    var tmpDate = new Date(urlKeys.query.iso);
    jsonResponse.unixtime = tmpDate.getTime();
    res.end(JSON.stringify(jsonResponse));
  }
  else {
    res.writeHead(404);
    res.end("Your request is unknown to the server.");
  }
})

server.listen(Number(process.argv[2]));
