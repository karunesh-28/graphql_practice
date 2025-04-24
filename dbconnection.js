import mongoose from "mongoose";
export default function connectDB()
{
    mongoose.connect("mongodb://localhost:27017/pms1")
    .then(()=>{
        console.log("database connected")
    })
    .catch((err)=>{
        console.log(err)
    })
}


