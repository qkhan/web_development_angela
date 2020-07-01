//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res) {
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;
    res.send("The result of the calculation is " + result);
});

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var result = weight / (height * height)
    var html = "<h1>BMI Calculator</h1><BR/>Your BMI is " + result;
    res.send(html);
});



// app.get("/contact", function(req, res) {
//   res.send("<h1>Contact me at qaisarjkhan@gmail.com</h1>");
// });
//
// app.get("/about", function(req, res) {
//   res.send("<h1>I am a Developer and Architect and Business Analyst and Manager and CTO.</h1>");
// });

app.listen(3000, function() {
  console.log("Server started on port 3000.");
})
