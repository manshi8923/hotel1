const express=require("express");
const dotenv=require("dotenv");
const connectDB=require("./config/db");
const path=require("path");
dotenv.config();
connectDB();

const app=express();
app.use(express.json()); // to accept json data

app.use("/api/rooms",require("./routes/roomRoutes"));
app.use("/api/guests",require("./routes/guestRoutes"));

app.use(express.static(path.join(__dirname,'./client/build')));
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
})
const PORT=process.env.PORT||8090
app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`)
})
