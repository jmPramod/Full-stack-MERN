const express=require("express");
const {createRoomController,
    roomEdit,
    roomDelete,
    getAllRoom,getSingleRoom} = require("../controller/roomController");
const app=express();
const roomRouter=express.Router()
const creatError = require("../utils/errorHandle");
const { verifyAdmin } = require("../utils/verifyToken");



// =
//CREAT: http://localhost:5300/room/add-hotel/add-room/:hotelID
//READ :
//UPDATE
//DELETE


//!create
roomRouter.post("/add-room/:hotelID",verifyAdmin,createRoomController)
//!Update



roomRouter.put("/update-room/:id",verifyAdmin,roomEdit) 

//!delete


roomRouter.delete("/delete-room/:id/:hotelID",verifyAdmin,roomDelete) 


//!get all


roomRouter.get("/get-all-room",getAllRoom) 


//!get single room

roomRouter.get("/get-single-room/:id",getSingleRoom) 


module.exports = roomRouter