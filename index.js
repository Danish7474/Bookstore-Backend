import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"


const app = express()

dotenv.config();
app.use(cors())
app.use(express.json())


const PORT= process.env.PORT || 4000
const URI=process.env.MongoDBURI

// mogodb conection
try {
  mongoose.connect(URI, {
    useNewUrlParser: true
  })
  console.log("conected to mongodb")
} catch (error) {
  console.log("error",error)
}
//define route
app.use("/book",bookRoute)
app.use("/user", userRoute)

app.listen( PORT, () => {
  console.log(`Example app listening on port ${ PORT}`)
})