// Node.js server to run token-system-client

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/token-system-client'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/token-system-client/index.html'));
});

app.listen(process.env.PORT || 8080);
