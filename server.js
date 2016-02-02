var express = require('express');
var path = require('path');

var app = express();
app.use(express.static('dist'));
app.use('/bundle.js', function (req, res) {
  return res.sendFile(path.join(__dirname, 'dist/bundle.min.js'));
});
app.use('/css/app.css', function (req, res) {
  return res.sendFile(path.join(__dirname, 'dist/css/app.css'));
});
app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 3000, function (err) {
  if (err) { console.log(err)  };
  console.log('Server started');
});
