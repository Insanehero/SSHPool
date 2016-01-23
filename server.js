var SSHPool = require('./SSHLib');
var hosts = require('./hosts')
var fs = require('fs');



var ConnectionPool = new SSHPool(hosts);


ConnectionPool.on('ready', function(conn) {
  console.log(conn.config.host);
  conn.findFolderRecursive('/testy', 'poo', function(err, hits) {
    // console.log('hits', hits);
  });

  conn.fileCount('/', function(err, count) {
    // console.log(count);
  });
});

ConnectionPool.on('close', function() {
  console.log('connections closed');
})

ConnectionPool.connect();
