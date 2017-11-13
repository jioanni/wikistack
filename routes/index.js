const express = require('express');
const router = express.Router();
const wikiRouter = require('./wiki');
const usersRouter = require('./users');


router.get('/', function(req, res) {
    res.send("WELCOME TO THE JUNGLE (also the homepage)");
})

router.use('/wiki', wikiRouter);
router.use('/users', usersRouter);



module.exports = router;