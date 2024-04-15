const asyncHandler =require("express-async-handler");
const Guests=require("../models/guestModel");

const getGuests=asyncHandler(async(req,res)=>{
    const guests=await Guests.find();
    res.send(guests);
});

const addGuest=asyncHandler(async(req,res)=>{
  console.log(req.body);
    const newGuest=await new Guests(req.body);
    await newGuest.save();
    res.status(201).json(newGuest);
});
 
const updateGuest=asyncHandler(async(req,res)=>{
  const {name,email,price,address,phone,days,arrival,depart,bill}=req.body;
  try{
      const guest=await Guests.findById(req.params.id);
      if(guest){
          guest.name=name;
          guest.email=email;
          guest.address=address;
          guest.phone=phone;
          guest.price=price;
          guest.days=days;
          guest.arrival=arrival;
          guest.depart=depart;
          guest.bill=bill;
          const updatedGuest=await guest.save();
          console.log(updateGuest);
          res.send(updateGuest);
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
})

module.exports = {getGuests,addGuest,updateGuest};
