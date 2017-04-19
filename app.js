var express     = require('express'),
    mongoose    = require('mongoose'),
    app         = express();
    mongoose    = require('mongoose');

//database connection
mongoose.connect('mongodb://localhost/asset_management');

app.set('view engine', 'ejs');
app.use(express.static('public'));

//Routes
var indexRouter = require('./routes/index.js');
var userRouter = require('./routes/users.js');
var assetRouter = require('./routes/assets.js');

app.use(indexRouter);
app.use(userRouter);
app.use(assetRouter);


app.listen(3000, function(){
    console.log('Server started on port 3000...');
});