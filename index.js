const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');
const volleyball = require('volleyball');

const app = express();

app.use(volleyball);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3333, function() {
    console.log("Listening on 3333");
});

app.get("/test", function(req, res) {
    res.send("This is only a test")
})