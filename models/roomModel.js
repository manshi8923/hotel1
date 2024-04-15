const mongoose=require("mongoose");
const roomSchema=mongoose.Schema({
    roomNo:{
        type:Number,
        required:true
    },
    book:{
        type:String,
        required:true
    },
    cleaningStatus:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    bookedOn:{
        type:String,
        required:false
    },
    bookedBy:{
        type:String,
        required:false
    }
})


const Rooms=mongoose.model("Room",roomSchema);
module.exports=Rooms;