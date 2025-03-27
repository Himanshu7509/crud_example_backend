import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

const dbConnect = async( ) =>{
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Connected to MongoDB");
        
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
} 

    export default dbConnect;