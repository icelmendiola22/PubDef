var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

/* GET New User page. */
router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Add New User' });
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var clientFirstName = req.body.firstName;
    var clientMiddleName = req.body.middleName;
    var clientLastName = req.body.lastName;
    var phoneNumber = req.body.phoneNumber;
    var phoneNumberType = req.body.phoneNumberType;
    var altContactNumber = req.body.altContactNumber;
    var altContactName = req.body.altContactName;
    var altContactRelationship = req.body.altContactRelationship;
    var email = req.body.email;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "clientFirstName" : clientFirstName,
        "clientMiddleName" : clientMiddleName,
        "clientLastName" : clientLastName,
        "phoneNumber" : phoneNumber,
        "phoneNumberType" : phoneNumberType,
        "altContactNumber" : altContactNumber,
        "altContactName" : altContactName,
        "altContactRelationship" : altContactRelationship,
        "email" : email
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("userlist");
        }
    });

});

module.exports = router;
