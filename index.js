var express = require('express')
var app = module.exports = express();
app.use(express.json());

require('./api.js')(app);

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
})
