var express = require('express');
var app = express();
var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    name: String,
    title: String,
    branch: String
});

module.exports = mongoose.model("User", UserSchema);