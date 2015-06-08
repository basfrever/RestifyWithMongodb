var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/RestifyData');
require('./../api/userDetails.js')
