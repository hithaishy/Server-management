var express = require('express');
var router = express.Router();

router.get('/settings', function(req,res,next){
  res.render('index.html');
});

router.get('/manage', function(req,res,next){
    res.render('manage.html');
  });
module.exports = router;

