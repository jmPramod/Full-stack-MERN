const express = require("express");
const { default: mongoose } = require("mongoose");
const authrouter = require("./routes/auth");
const hotelRouter = require("./routes/hotel");
const roomRouter = require("./routes/room");
const userRouter = require("./routes/users");
const cors=require("cors")
const app = express();
require("dotenv").config();
const cookieParser = require('cookie-parser')
/* -------------------------------------------------------------------------- */
/*                            //?  MongoDBconnection                             */
/* -------------------------------------------------------------------------- */
mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Atlas DB Connected!!!!");
  } catch (err) {
    throw err;
  }
};
mongoose.connection.on("disconnected", () => console.log("Atlas got Disconnected")); //!delete the ip adrress in atlas and check,
mongoose.connection.on("connected", () => console.log("Atlas is connecting ....."));
connectDB();
  
//todo To Check the Server is  running
// app.get("/", (req, res)=>{
//     res.send("Welcome to Atlas")
// })




const corsOprion={
  origin:"*",
  credential:true,
  optionSuccessStatus:200
}
/* -------------------------------------------------------------------------- */
/*                               //? Middleware                               */
/* -------------------------------------------------------------------------- */


// app.use((req,res,next)=>{
//   console.log(" i sencond middlewear ");
//   next()
// })
// app.use((req,res,next)=>{
//   console.log(" i entered middlewear ");
//   next() 
// })
app.use(express.urlencoded( {extended:true} ))
app.use(cookieParser())
app.use(express.json())
app.use(cors(corsOprion))
app.use("/auth", authrouter);
app.use("/hotel", hotelRouter);
app.use("/room", roomRouter);
app.use("/users", userRouter);

 
//to handle error we need to use middlewear
app.use((err,req,res,next)=>{
  console.log("err_12345",err);
  const errorStatus=err.status||500
const errorMsg=err.message||"something went Wrong!!!!"
  return res.status(500).json({
    Success:false,
    status :errorStatus,
    message :errorMsg,
    stack :err.stack,
  })
})
/* -------------------------------------------------------------------------- */
/*                            //? server is running                           */
/* -------------------------------------------------------------------------- */
app.listen(process.env.PORT, () => {
  console.log(
    `server is running on port http://localhost:${process.env.PORT}/`
  );
});
