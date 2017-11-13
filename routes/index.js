const express = require('express');
const router = express.Router();
const wikiRouter = require('./wiki');
const usersRouter = require('./users');

router.use('/wiki', wikiRouter);
router.use('/users', usersRouter);


module.exports = router;