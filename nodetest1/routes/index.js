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

/* GET Activity Log page. */
router.get('/activitylog', function(req, res) {
  res.render('activitylog', { title: 'Client Profile' });
});

/* GET AB 109 page */
router.get('/ab109', function(req, res) {
  res.render('ab109', { title: 'AB 109' });
});

/* GET Documents page */
router.get('/documents', function(req, res) {
  res.render('documents', { title: 'Documents' });
});

/* GET B.C. Request page */
router.get('/bcrequest', function(req, res) {
  res.render('bcrequest', { title: 'B.C. Request' });
});

/* GET clientlist page. */
router.get('/clientlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('clientlist', {
            "clientlist" : docs
        });
    });
});

/* GET New User page. */
router.get('/newclient', function(req, res) {
    res.render('newclient', { title: 'Activity Log' });
});

/* POST to Add User Service */
router.post('/addclient', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var date = req.body.date;
    var checkbox = req.body.checkbox;
    var cdcNumber = req.body.cdcNumber;
    var bookingNumber = req.body.bookingNumber;
    var name = req.body.name;
    var phoneNumber = req.body.phoneNumber;
    var phoneNumberType = req.body.phoneNumberType;
    var altContactNumber = req.body.altContactNumber;
    var altContactName = req.body.altContactName;
    var altContactRelationship = req.body.altContactRelationship;
    var email = req.body.email;
    var addressStreet = req.body.addressStreet;
    var addressCity = req.body.addressCity;
    var addressState = req.body.addressState;
    var addressZipcode = req.body.addressZipcode;
    var birthday = req.body.birthday;
    var birthCity = req.body.birthCity;
    var birthState = req.body.birthState;
    var addressCounty = req.body.addressCounty;
    var hospitalName = req.body.hospitalName;
    var birthCountry = req.body.birthCountry;
    var id = req.body.id;
    var socialSecurity = req.body.socialSecurity;
    var program = req.body.program;
    var timeLeft = req.body.timeLeft;
    var motherName = req.body.motherName;
    var fatherName = req.body.fatherName;
    var notes = req.body.notes;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "date" : date,
        "checkbox" : checkbox,
        "cdcNumber" : cdcNumber,
        "bookingNumber" : bookingNumber,
        "name" : name,
        "phoneNumber" : phoneNumber,
        "phoneNumberType" : phoneNumberType,
        "altContactNumber" : altContactNumber,
        "altContactName" : altContactName,
        "altContactRelationship" : altContactRelationship,
        "email" : email,
        "addressStreet" : addressStreet,
        "addressCity" : addressCity,
        "addressState" : addressState,
        "addressZipcode" : addressZipcode,
        "birthday" : birthday,
        "birthCity" : birthCity,
        "birthState" : birthState,
        "addressCounty" : addressCounty,
        "hospitalName" : hospitalName,
        "birthCountry" : birthCountry,
        "id" : id,
        "socialSecurity" : socialSecurity,
        "program" : program,
        "timeLeft" : timeLeft,
        "motherName" : motherName,
        "fatherName" : fatherName,
        "notes" : notes
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("clientlist");
        }
    });

});

module.exports = router;
