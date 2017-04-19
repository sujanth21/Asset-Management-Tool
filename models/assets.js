var mongoose = require('mongoose');

var AssetsSchema = mongoose.Schema({
    name: String,
    asset_id: String,
    status: String,
    user: String
});

module.exports = mongoose.model("Assets", AssetsSchema);