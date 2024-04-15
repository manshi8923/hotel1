const mongoose=require("mongoose");
const guestSchema=mongoose.Schema({
    name:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:false,
    },
    address:{
        type:String,
        required:false
    },
    price:{
        type:String,
        required:false
    },
    phone:{
        type:String,
        required:false
    },
    days:{
        type:Number,
        required:false
    },
    arrival:{
        type:String,
        required:false
    },
    depart:{
        type:String,
        required:false
    },
    bill:{
        type:Number,
        required:false,
    }
})

const Guests=mongoose.model("Guests",guestSchema);
module.exports=Guests;