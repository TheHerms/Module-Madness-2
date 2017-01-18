var http = require('http');
var account = require('./account');

http.createServer(function(req, res) {
    res.writeHead(200);

    res.write(account.acc());

    res.write(account.total()+'\n');

    res.end();
  }).listen(3000);
