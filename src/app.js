import  express from "express";
import cors from "cors"; /*-----------------------need to studyy----------------*/
import cookieParser from "cookie-parser";
const app = express()


app.use(cors({
   origin: process.env.CORS_ORIGIN, /*this the place where our frontend talks with backend through CORS_ORIGN*/
 credentials:true
}))

/*  Here data is comming from frontend that's why we are preparing and limitnig the amount of data to come */

app.use(express.json({limit:"16kb"})) /*When we fill form then data is recived by this */
app.use(express.urlencoded({extended:true,limits:"16kb"}))
app.use(express.statics("public")) /* This is to store file,folder,pdf or images or favicon */
app.use(cookieParser()) /*to access the cookies and to perform CRUD opertion on website cookies */

export {app}

/*here multer is not use but multer is used for file uploading configuration */