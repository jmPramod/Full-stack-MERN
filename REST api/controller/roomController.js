const HotelModel = require("../Model/HotelModel");
const RoomModel = require("../Model/RoomModel");
const creatError = require("../utils/errorHandle");

const createRoomController=async (req,res,next)=>{

const hotelId=req.params.hotelID
const newRoom=new RoomModel(req.body)
try{
const savedRoom=await newRoom.save()

console.log("savedRoom._id",savedRoom._id,hotelId);
try{
await HotelModel.findByIdAndUpdate(hotelId,{$push:{rooms:savedRoom._id}})
}
catch(err){
    next(err)
}
res.status(200).json(savedRoom)

}
catch(err){
    next(err)
}


}

const roomEdit=async(req,res,next)=>{
    // console.log("pramod_update",req.body)



    try{
        const roomtoUpdate=await  RoomModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(roomtoUpdate)//will tell status and show what hotel is saved

}
catch(err){
 
    next(err);
}
} 
//!delete Room


const roomDelete=async(req,res,next)=>{
    
const hotelId=req.params.hotelID

    try{
        const RoomtoDelete=await  RoomModel.findByIdAndDelete(req.params.id)
        try{
            await HotelModel.findByIdAndUpdate(hotelId,{$pull:{rooms:req.params.id}})
            }
            catch(err){
                next(err)
            }
        res.status(200).json("Room deleted successfully !!!!")//will tell status and show what hotel is saved

}
catch(err){
    // console.log(err);
    // res.status(500).json (err)
    next(err);
}
}

//!get aLL

const getAllRoom=async(req,res,next)=>{
    // console.log("pramod_getAll",req.body)



    try{
        const GetAllRoom=await  RoomModel.find({})
        res.status(200).json(GetAllRoom)//will tell status and show what hotel is saved

}
catch(err){

    next(err);

}
}
 


//!get single hotel

const getSingleRoom=async(req,res,next)=>{
  
  

    try{ 

        const singleRoom=await  RoomModel.findById(req.params.id)
      
        res.status(200).json(singleRoom)//will tell status and show what hotel is saved

      
} 
catch(err){
  next(err);


}
}

module.exports={createRoomController,roomEdit,roomDelete,getAllRoom,getSingleRoom}