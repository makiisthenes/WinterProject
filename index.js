// This is the nodejs server that will be used to run and serve the html file requests.
// Load Node modules
var toTitleCase = require('titlecase');
var express = require('express');
const ejs = require('ejs');
// Initialise Express
var app = express();
app.use(express.urlencoded({
  extended: true
}))
// Render static files
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Port website will run on
app.listen(8080);

console.log("Listening on port 8080 for incoming connections...");

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    var name = "Maki";
    console.log("Recieved Request GET /");
    res.render('pages/index', {name:name});
    console.log("Response Sent index file");
});

app.post('/', (req, res) => {
  var username = toTitleCase(req.body.name_input);
  console.log("User has submitted the name "+ username);
  res.render('pages/talk', {name:username});
})
