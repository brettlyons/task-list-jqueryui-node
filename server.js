var http = require('http');
var url = require('url');
var staticServer = require('node-static');
// require('dotenv').load()
//var db = require('monk')(process.env.MONGOLAB_URI);
//var db = require('monk')('localhost/tasksdb');
//var tasks = db.get('tasks');

var file = new(staticServer.Server)();

var server = http.createServer(function (req, res) {
  var urlKeys = url.parse(req.url, true);
  if(req.method != 'GET'){
    return res.end('Send me a GET\n');
  }
  // if (urlKeys.pathname == '/api/tasks'){
  //   tasks.find({}, function(err, tasks) {
  //     res.writeHead(200, {'Content-Type':'application/json'});
  //     res.end(JSON.stringify(tasks)); // tasks is an array here.
  //   });
  // }
  else {
    file.serve(req, res);
  }
  // if(req.method == "POST") {
  //   tasks.insert({
  //     //put new task description into db . . .
  //   });
  // }
});

server.listen(Number(process.argv[2]));
