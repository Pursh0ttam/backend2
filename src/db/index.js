import mongoose from "mongoose";
// import { DB_NAME } from "..constants/constants";
import { DB_NAME } from "../constants.js";


const connectDB = async()=>{
    try{
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance}`)
       console.log(connectionInstance);
        }

        

    
    catch (error){
        console.log("mongodb connection Failed",error);
        process.exit(1)
    }
}

export default connectDB;