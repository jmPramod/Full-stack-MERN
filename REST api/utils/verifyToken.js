const jwt=require( "jsonwebtoken");
const creatError = require("./errorHandle");

require("dotenv").config();

const verifyToken=(req,res,next)=>{
const token = req.cookies.access_token

if(!token){
console.log("entering if 1 condition");
    return next(creatError(401,"tou are not authorized!!"))
}

console.log("entering if 1.1 condition");
jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
    console.log("user",user);
if(err){
    console.log("entering if 2 condition");
   return next(creatError(401,"Token is not valid"))
}
console.log("user_info",user);
req.user_info=user
next()
})
}
  


const verifyUser=(req,res,next)=>{
verifyToken(req,res ,()=>{
    console.log("pramod verifyUser",req.user_info,req.params.id );


    if(req.user_info.id==req.params.id||req.user_info.isAdmin){
        console.log("if verifyToken");
        next()
    }
    else{
 return next(creatError(403,"You are not authorized"))
    }
})
}

const verifyAdmin=(req,res,next)=>{
    verifyToken(req,res ,()=>{
        console.log("pramod verifyAdmin",req.user_info,req.params.id );
    
    
        if(req.user_info.isAdmin){
            console.log("verifyAdmin");
            next()
        }
        else{
     return next(creatError(403,"You are not authorized"))
        }
    })
    }
    


module.exports = {verifyToken,verifyUser,verifyAdmin}