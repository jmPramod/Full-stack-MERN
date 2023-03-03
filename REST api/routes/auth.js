const express=require("express")
const { register,login } = require("../controller/authController")
const authrouter=express.Router()

//http://localhost:5300/auth
authrouter.post("/register", register)
authrouter.post("/login", login)

module.exports=authrouter