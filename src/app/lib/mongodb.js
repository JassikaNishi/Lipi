import mongoose from "mongoose";

export const connectMongoDB=async()=>{
    try{
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error('MONGODB_URI is not set');
        }
        await mongoose.connect(uri);
        console.log("Connected to Mongodb");

    }catch(error){
        console.log("Error connecting to db",error);
    }
}
