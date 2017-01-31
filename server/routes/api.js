var express = require('express');
var router = express.Router();
var models = require('../models/index');


router.get('/', function(req, res, next) {
    var response = {};
    console.log('in');
    res.json(response);
});


router.post('/upload', function(req, res, next) {
    var response = {};
    console.log('-- Upload --');
    console.log(req.files);
    console.log(' >>>>>>> ^^^^^^^ <<<<<<<< ');
    res.json(response);
});


module.exports = router;
