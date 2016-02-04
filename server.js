var express = require('express');
var path = require('path');

var app = express();
app.use(express.static('dist'));

app.listen(process.env.PORT || 3000, function (err) {
  if (err) { console.log(err)  };
  console.log('Server started');
});
