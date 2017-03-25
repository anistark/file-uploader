var express = require('express');
var router = express.Router();
var models = require('../models/index');
var multer = require('multer');
var fs = require('fs');


var upload = multer({ dest: './client/uploads/'});

var uploadType = upload.single('image');


router.get('/', function(req, res, next) {
    var response = {
        'success' : true,
        'data' : null,
        'message' : 'You have successfully connected to the server!',
        'error' : null
    };
    res.json(response);
});


router.post('/upload', uploadType, function(req,res, next) {
    /** When using the "single"
     data come in "req.file" regardless of the attribute "name". **/
    var tmp_path = req.file.path;

    /** The original name of the uploaded file
     stored in the variable "originalname". **/
    var target_path = './client/uploads/' + req.file.originalname;

    /** A better way to copy the uploaded file. **/
    var src = fs.createReadStream(tmp_path);
    var dest = fs.createWriteStream(target_path);
    src.pipe(dest);
    fs.unlink(tmp_path); //deleting the tmp_path
    var response = {
        'success' : true,
        'data' : null,
        'message' : '',
        'error' : null
    };
    src.on('end', function() {
        response['message'] = 'File Uploaded!';
        res.send(response);
    });
    src.on('error', function(err) {
        response['message'] = 'Some error occurred while uploading! Kindly try again later!';
        response['error'] = String(err);
        res.send(response);
    });
});


module.exports = router;
