// Dependencies
// =============================================================
var express = require("express");
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

//Route that sends user to the 
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
  });
  
  // Displays all characters
  app.get("/viewtables", function(req, res) {
    res.sendFile(path.join(__dirname, "viewtables.html"));
  });
  
  app.get("/api/tables", function(req, res) {
    return res.json(currentTables);
  });

  app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
  });

  