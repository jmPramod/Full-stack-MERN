const express=require("express");
const  {UserEdit,UserDelete,getAllUser,getSingleUser} = require("../controller/userController");
const UserMode = require("../Model/UserMode");
const { verifyToken, verifyUser, verifyAdmin } = require("../utils/verifyToken");
const app=express();
const userRouter=express.Router()


// {UserEdit,UserDelete,getAllUser,getSingleUser}

// userRouter.get()
//todo  check these middlewear before sending
// userRouter.get("/authenticate",verifyToken,(req,res,next)=>{
//  res.send("authenticted !!")
// }) 

// userRouter.get("/check-user/:id",verifyUser,(req,res,next)=>{
//     res.send("you can delete your account (user) !!")
//    }) 
   
//    userRouter.get("/check-admin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("you can delete all account (Admin) !!")
//    }) 
   





//!update user 
userRouter.put("/update-user/:id",verifyUser,UserEdit) 

//!delete user


userRouter.delete("/delete-user/:id",verifyUser,UserDelete) 


//!get aLL user


userRouter.get("/get-all-user",verifyAdmin,getAllUser) 


//!get single user

userRouter.get("/get-single-user/:id",verifyUser,getSingleUser) 


module.exports = userRouter