const UserMode = require("../Model/UserMode")
var bcrypt = require('bcryptjs');
const creatError = require("../utils/errorHandle");
const jwt = require('jsonwebtoken');


require("dotenv").config();





let register= async(req,res,next)=>{
    console.log(req.body);
try{
    
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync( req.body.password , salt);
    const newUser=new UserMode({
        userName: req.body.userName,
        email: req.body.email,
        password:hash,
        isAdmin: req.body.isAdmin,
    })
    await newUser.save()
    res.status(200).send({
        msg:"User has been created  successfully",
        user:newUser
    })
}
catch(err){
next(err)
}
}

const login=async(req,res,next)=>{
    console.log(req.body);
try{
    const user= await UserMode.findOne({userName:req.body.userName})
    console.log("user from atlas: " + user);
    if(!user) return next(creatError(404,"User not Found!!"))
    
    const correctPassword= await bcrypt.compare(req.body.password, user.password);


    
 
    // console.log("correctPassword",correctPassword,req.body.password, user.password,req.body.userName);
    if(!correctPassword) return next(creatError(404,"wrong Password or user name !!"))
    
const token=jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT_SECRET)




let {password,isAdmin,...otherDetails} = user._doc 
    res.cookie("access_token",token,{httpOnly:true}).status(200).send({
        msg:"User has been Logged in successfully",
        details:otherDetails
    })
}
catch(err){
next(err)
}
}
module.exports={register,login}