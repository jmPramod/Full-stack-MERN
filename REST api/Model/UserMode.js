const mongoose =require( "mongoose")
const { Schema } = mongoose;

const UserModel = new Schema({
  userName: { type: String, required: true,unique:true },
  email: {unique:true , type: String, required: true },
  password: {unique:true , type: String, required: true },
isAdmin:{type:Boolean,default:false}
},{
    timestamps:true
}
);

module.exports=mongoose.model("User",UserModel)
