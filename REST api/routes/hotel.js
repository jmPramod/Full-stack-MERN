const express=require("express");
const {hotelCreate,hotelEdit,hotelDelete,getAllHotel,getSingleHotel} = require("../controller/homeController");
const app=express();
const hotelRouter=express.Router()
const HotelModel =require("../Model/HotelModel");
const creatError = require("../utils/errorHandle");
const { verifyAdmin } = require("../utils/verifyToken");



// =
//CREAT: http://localhost:5300/hotel/add-hotel
//READ :
//UPDATE
//DELETE


//!create
hotelRouter.post("/add-hotel",verifyAdmin,hotelCreate)
//!Update



hotelRouter.put("/update-hotel/:id",verifyAdmin,hotelEdit) 

//!delete


hotelRouter.delete("/delete-hotel/:id",verifyAdmin,hotelDelete) 


//!get aLL


hotelRouter.get("/get-all-hotel",getAllHotel) 


//!get single hotel

hotelRouter.get("/get-single-hotel/:id",getSingleHotel) 


module.exports = hotelRouter