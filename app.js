const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');
const volleyball = require('volleyball');

const app = express();

app.use(volleyball);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);

app.listen(3333, function() {
    console.log("Listening on 3333");
});

app.get("/test", function(req, res) {
    res.send("This is only a test")
})