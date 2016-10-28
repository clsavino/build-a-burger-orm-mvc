/* Set up the server file to require npm packages, express middleware, body-parser, methodOverride, espress-handlebars and the handlebars engine
*/

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var router = require('./controllers/burgers_controller.js');
app.use('/', router);

// Set up the server
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("App is running on port " + port);
});

