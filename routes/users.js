var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//user models
var User = require('../models/user.js');

router.use(bodyParser.urlencoded({extended: true}));

//users main route
router.get('/users', function(req, res){
    //get all users from the database
    User.find({}, function(err, allUsers){
        if(err) {
            console.log(err);
        } else {
            res.render('./users/users', {users: allUsers});
        }
    });
});

//create new user form route
router.get('/users/new', function(req, res){
    res.render('./users/new');
});

//create new user route
router.post('/users', function(req, res){
    //get the data from the form and add to users array
    var name = req.body.name;
    var title = req.body.title;
    var branch = req.body.branch;
    var newUser = {name: name, title: title, branch: branch};
    
    //Creating new user
    User.create(newUser, function(err, user){
        if(err) {
            console.log(err);
        } else {
            console.log("User added to the database!");
            //redirect to users main route
            res.redirect('./users');
        }
    });
});


module.exports = router;