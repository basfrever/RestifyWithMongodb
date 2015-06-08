var mongoose=require('mongoose');
//Retriving the register model from mongoose lib
var user=mongoose.model('User');
//POST
exports.createUser=function(req,res,next){
    
 var postUserData=new user(req.body);
    //Sending body data to user model   
    postUserData.save(function(err,userDetils){
        if(err){
            res.status(500);
            res.json(err)
        }else{
            console.log('result'+userDetils);
            res.json(userDetils)             
        }
    })
}
//GET
exports.getUser=function(req,res,next){
//getting data from user model
    user.find(function(err,userDetils){
        if(err){
            res.status(500);
            res.json(err)
        }else{
            res.json(userDetils)             
        }
    })
}