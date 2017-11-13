const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');
const volleyball = require('volleyball');
const models = require('./models');
const router = require('./routes');

const app = express();

app.use(volleyball);
app.use(express.static('wikistack'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", router);

var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);

// models.Page.sync();
// models.User.sync();

models.db.sync({force: true})
.then(function() {
    app.listen(3333, function() {
        console.log("Listening on 3333");
    });
})
.catch(console.error());



app.get("/test", function(req, res) {
    res.send("WELCOME TO THE JUNGLE (also the homepage)");
})