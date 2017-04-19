var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

var users = [
    {name: "User1", title: "Manager", branch: "Melbourne"},
    {name: "User2", title: "Developer", branch: "USA"},
    {name: "User3", title: "Designer", branch: "India"}
];

//users main route
router.get('/users', function(req, res){
    res.render('./users/users', {users: users});
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
    users.push(newUser);
    //redirect to users main route
    res.redirect('./users');
});

module.exports = router;