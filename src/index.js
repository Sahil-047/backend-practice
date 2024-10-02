import dotenv from "dotenv"
import connecDB from "./db/db.js";


dotenv.config({
    path: './.env'
})

connecDB()