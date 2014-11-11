var express = require('express');
var serveStatic = require('serve-static');
var swig = require('swig');
var morgan = require('morgan');

console.log('Starting app...')

var app = express();

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('view cache', false);
swig.setDefaults({ cache: false });

app.use(morgan('combined'));

app.get('/', function(req, res) {
  res.render('index');
});

app.use(serveStatic('public'));

app.listen(8888, function() {
  console.log('Listening')
});
