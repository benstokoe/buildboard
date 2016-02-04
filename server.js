var express = require('express');
var path = require('path');

var app = express();
app.use(express.static('dist'));
app.use('/bundle.min.js', function (req, res) {
  return res.sendFile(path.join(__dirname, 'bundle.min.js'));
});
app.use('/css/app.css', function (req, res) {
  return res.sendFile(path.join(__dirname, 'css/app.css'));
});
app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 3000, function (err) {
  if (err) { console.log(err)  };
  console.log('Server started');
});
