const express = require('express');
const router = express.Router();
const models = require('../models');
const Page = models.Page; 
const User = models.User; 


router.post('/', function(req, res, next) {

    
      var page = Page.build({
        title: req.body.title,
        content: req.body.content,
        status: req.body.status,
    });
    
      
      page.save()
      .then(res.json(req.body));

    });

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