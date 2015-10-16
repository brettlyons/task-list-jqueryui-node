var http = require('http');
// var url = require('url');
// require('dotenv').load()
//var db = require('monk')(process.env.MONGOLAB_URI);
var db = require('monk')('localhost/tasksdb');
var tasks = db.get('tasks');

var server = http.createServer(function (req, res) {
  if(req.method != 'GET'){
    return res.end('Send me a GET\n');
  }
  tasks.find({}, function(err, tasks) {
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify(tasks)); // tasks is an array here.
  }); // without the POST boilerplate, this is 20 lines
  // if(req.method == "POST") {
  //   tasks.insert({
  //     //put new task description into db . . .
  //   });
  // }
});

server.listen(Number(process.argv[2]));
