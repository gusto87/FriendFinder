// npm packages used for the server
var express = require("express");
var path = require("path");

//lets node know we are creating an express server
var app = express();

// sets port 
var PORT = process.env.PORT || 8080;

// sets the express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// routes to direct the server
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener to start the server
app.listen(PORT, function(){
    console.log("App listening on PORT:" + PORT);
});

