const express = require('express');
const router = express.Router();
const models = require('../models');
const Page = models.Page; 
const User = models.User; 


router.post('/', function(req, res, next) {
    
      // STUDENT ASSIGNMENT:
      // add definitions for `title` and `content`
    
      var page = Page.build({
        title: req.body.title,
        urlTitle: req.body.urlTitle,
        content: req.body.content,
        status: req.body.status,
    });
    
      // STUDENT ASSIGNMENT:
      // make sure we only redirect *after* our save is complete!
      // note: `.save` returns a promise or it can take a callback.
      page.save()
      .then(res.redirect('/'));
      // -> after save -> res.redirect('/');
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