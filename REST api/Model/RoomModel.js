const mongoose =require( "mongoose")
const { Schema } = mongoose;

const RoomModel = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  desc: {type: String, required: true },
  maxPeople: {type: Number, required: true },
  roomNumbers: [{number:Number,unavailableDate:{type:[Date]}}],

},{
    timestamps:true
}
);

module.exports=mongoose.model("Room",RoomModel)
