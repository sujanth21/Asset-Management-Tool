var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

//asset model
var Assets = require('../models/assets.js');

router.use(bodyParser.urlencoded({extended: true}));

//main asset route
router.get('/assets', function(req, res){
    //get all assets from database
    Assets.find({}, function(err, allAssets){
        if(err){
            console.log(err);
        } else {
            res.render('assets/assets', {assets: allAssets});
        }
    });
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
    var description = req.body.description;
    var newAsset = {name: name, asset_id: asset_id, status: status, description: description};
    
    //Create new asset
    Assets.create(newAsset, function(err, asset){
        if (err) {
            console.log(err);
        } else {
            //redirect back to assets page
            res.redirect('./assets');
        }
    });
   
});

//show details page route
router.get('/assets/:id', function(req, res){
    // find the asset with provided id
    Assets.findById(req.params.id, function(err, foundAsset){
        if(err) {
            console.log(err);
        } else {
            //render show template
            res.render('assets/show', {asset: foundAsset});
        }
    });
});

module.exports = router;