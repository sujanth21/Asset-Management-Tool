var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

var assets = [
    {name: "Mobile Phone", asset_id: 1232142, status: "In Use", user: "User1"},
    {name: "iPad", asset_id: 253345, status: "Storage", user: "Not assigned"},
    {name: "Android Tablet", asset_id: 36465657, status: "In Use", user: "User4"}
];

//main asset route
router.get('/assets', function(req, res){
    res.render('assets/assets', {assets: assets});
});

//create new asset form route
router.get('/assets/new', function(req, res){
    res.render('assets/new');
});

//create new assets
router.post('/assets', function(req, res){
    //get all data from the form and add to the assets array
    var name = req.body.name;
    var asset_id = req.body.asset_id;
    var status = req.body.status;
    var user = req.body.user;
    var newAsset = {name: name, asset_id: asset_id, status: status, user: user};
    assets.push(newAsset);
    //redirect back to assets page
    res.redirect('./assets');
});

module.exports = router;