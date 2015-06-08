var mongoose = require('mongoose')
//Establishing connection with mongodb
mongoose.connect('mongodb://localhost/RestifyData');
require('./../model/userDetails.js')
