var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.listen(process.env.PORT || 3000, function (err) {
  if (err) { console.log(err)  };
  console.log('Started server');
});
