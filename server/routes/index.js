var express = require('express');
var router = express.Router();
var models = require('../models/index');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'SNHS' });
});

router.get('/about', function(req, res, next) {
  res.render('general/about', { title: 'About SNHS' });
});

module.exports = router;
