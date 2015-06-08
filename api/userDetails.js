var mongoose=require('mongoose');
var Schema=mongoose.Schema;


var userData= new Schema({
username:String,
address:String
});

mongoose.model('User',userData);