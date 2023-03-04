// const HotelModel =require("../Model/HotelModel");

const HotelModel = require("../Model/HotelModel");

// const creatError = require("../utils/errorHandle");
//!create
const hotelCreate = async (req, res, next) => {
  // console.log("pramod",req.body)

  const newHotel = new HotelModel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel); //will tell status and show what hotel is saved
  } catch (err) {
    // console.log(err);
    // res.status(500).json (err)
    next(err);
  }
};
//!Update

const hotelEdit = async (req, res, next) => {
  // console.log("pramod_update",req.body)

  try {
    const HoteltoUpdate = await HotelModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(HoteltoUpdate); //will tell status and show what hotel is saved
  } catch (err) {
    // console.log(err);
    // res.status(500).json (err)
    next(err);
  }
};
//!delete

const hotelDelete = async (req, res, next) => {
  // console.log("pramod_delete",req.body)

  try {
    const HoteltoDelete = await HotelModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel deleted successfully !!!!"); //will tell status and show what hotel is saved
  } catch (err) {
    // console.log(err);
    // res.status(500).json (err)
    next(err);
  }
};

//!get aLL

const getAllHotel = async (req, res, next) => {
  // console.log("pramod_getAll",req.body)

  try {
    const GetAllHotel = await HotelModel.find({});
    res.status(200).json(GetAllHotel); //will tell status and show what hotel is saved
  } catch (err) {
    // console.log(err);
    // res.status(500).json (err)
    next(err);
  }
};

//!get single hotel

const getSingleHotel = async (req, res, next) => {
  // const failed=true;
  // if(failed)return next(creatError(401,"you are not authorized"))

  try {
    console.log("try start");
    const singleHotel = await HotelModel.findById(req.params.id);
    console.log("singleHotel", singleHotel);
    res.status(200).json(singleHotel); //will tell status and show what hotel is saved

    console.log("try end");
  } catch (err) {
    //    console.log("pramod_error",err);
    // res.status(500).json (err)
    next(err);
  }
};

//!count by city

const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");

  try {
    const list = await Promise.all(
      cities.map((city, i) => {
        // return HotelModel.find({city:city}).length//? decrease performance
        return HotelModel.countDocuments({ city: city });
      })
    );
    const GetAllHotel = await HotelModel.find({});
    res.status(200).json(list); //will tell status and show what hotel is saved
  } catch (err) {
    next(err);
  }
};


const   countbyType= async (req, res, next) => {
    
    try {
        const hotelCount =await HotelModel.countDocuments({type:"Hotel"})
        const appartmentCount =await HotelModel.countDocuments({type:"appartement "})
        const resortCount =await HotelModel.countDocuments({type:"hotel"})
        const villaCount =await HotelModel.countDocuments({type:"hotel"})
        const cabinCount =await HotelModel.countDocuments({type:"hotel"})
        
      
      res.status(200).json([
       {type:"hotel", count: hotelCount},
        {type:"appartement", count:appartmentCount},
        {type:"resort", count:resortCount},
        {type:"villa", count:villaCount},
        {type:"cabin", count:cabinCount},

      
      ]); //will tell status and show what hotel is saved
    } catch (err) {
      next(err);
    }
  };
  
  
  

module.exports = {
  countByCity,
  hotelCreate,
  hotelEdit,
  hotelDelete,
  getAllHotel,
  getSingleHotel,
  countbyType
};
