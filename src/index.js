
import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({
    path:'./env'
})

connectDB()

.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
        app.listen("error",(error)=>{
            console.log("error",error)
            throw(error)
        })
    })
} )

.catch((error)=>{
    console.log("express connection failed",error)
})




/*
(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error) => {
            console.log("error",error)
            throw (error)            
        })

    app.listen(process.env.PORT,()=>{
        console.log(`port is listening on port ${process.env.PORT}`);
    })
    }
    catch(error){
        console.log("ERROR",error)
        throw error
    }
})()
*/