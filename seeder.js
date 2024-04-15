const mongoose=require("mongoose");
const dotenv=require("dotenv");
const connectDb=require("./config/db");
const roomModel=require("./models/roomModel");
const rooms = require("./utils/data");

//config
dotenv.config();
connectDb();

//function seeder
const importData=async()=>{
    try{
        await roomModel.deleteMany()
        const roomsData=await roomModel.insertMany(rooms);
        console.log('All rooms addded');
        process.exit();
    }
    catch(error){
        console.log(`${error}`);
        process.exit(1);
    }
}
importData();