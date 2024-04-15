const Rooms=require("../models/roomModel");
const asyncHandler =require("express-async-handler");

//get rooms status
const getRooms = asyncHandler(async (req, res) => {
    try{
    const rooms = await Rooms.find();
    res.send(rooms);
    }
    catch(err){
        res.send("Error in server side")
    }
});

//update
const updateRoom=asyncHandler(async(req,res)=>{
    const {roomNo,book,cleaningStatus,price,bookedOn,bookedBy}=req.body;
    try{
        const room=await Rooms.findById(req.params.id);
        if(room){
            room.roomNo=roomNo;
            room.book=book;
            roomNo.cleaningStatus=cleaningStatus;
            room.price=price;
            room.bookedOn=bookedOn;
            room.bookedBy=bookedBy;
            const updatedRoom=await room.save();
            console.log(updateRoom);
            console.log("manshi")
            res.send(updatedRoom);
        }
        else{
            console.log("error");
            res.status(404);
            throw new Error("Room not found");
        }
    }
    catch(err){
        res.send("Error in server side");
    }
  
});
module.exports={getRooms,updateRoom};