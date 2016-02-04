var express = require('express');
var path = require('path');

var app = express();
var static_path = path.join(__dirname, 'dist');

app.use(express.static(static_path))
  .get('/', function (req, res) {
    res.sendFile('index.html')
  })
  .listen(process.env.PORT || 3000, function (err) {
    if (err) { console.log(err)  };
    console.log('Started server');
  });
