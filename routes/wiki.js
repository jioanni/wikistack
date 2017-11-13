const express = require('express');
const router = express.Router();
// const indexRouter = require("./index");

// router.use('/', indexRouter);

router.get('/', function(req, res) {
    res.redirect('/');
})

router.post('/', function(req, res) {
    res.json(req.body);
})

router.get('/add/', function(req, res) {
    res.render('addpage');
})

module.exports = router;