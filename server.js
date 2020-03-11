// Dependencies
// =============================================================
var express = require("express");
var bodyparser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let currentTables = [];
let waitList = [];

//Variable for counting pageviews for decorative display
let viewCounter = 0;

//Route that sends user to the 
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "pages/home.html"));

    //adds to page views whenever home page is opened, logs to console.
    viewCounter++
    console.log(viewCounter);
});
  
app.get("/reservation", function(req, res) {
   res.sendFile(path.join(__dirname, "pages/reservation.html"));
});
  
  // Displays all characters
app.get("/tables", function(req, res) {
   res.sendFile(path.join(__dirname, "pages/table.html"));
});
  
app.get("/api/tables", function(req, res) {
   return res.json(currentTables);
});

app.get("/api/waitlist", function(req, res) {
   return res.json(waitList);
});

app.post("/api/tables", function (req, res) {

    var diner = req.body;
        console.log(diner);
    if (currentTables.length === 5){
        waitList.push(diner);
    } else {
        currentTables.push(diner);
    }

    res.json(diner);

});

  //Gets the server to start listening
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  