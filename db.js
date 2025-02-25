const mongoose=require("mongoose");
require("dotenv").config;

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("Connected to MongoDB Successfully"))
        .catch(error => console.log("MongoDB Connection Failed:", error))
    }
    catch(error){
        console.log("Failed to connect to MongoDB", error)
    }
}

module.exports=connectDB;