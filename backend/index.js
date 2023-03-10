import express from "express" ;
import router from "./route/category.route"
import routerP from "./route/products.route"
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import cors from 'cors'
const app = express();
 const PORT = 5053


app.use(bodyParser.urlencoded({extended:false}))
 app.use(bodyParser.json())

  var corsOptions ={
    optionsSuccessStatus:200,
    method:"GET , POST , PUT ,PATCH ,DELETE"
  }
   app.use(cors(corsOptions))
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})


mongoose.connect('mongodb://127.0.0.1:27017/node_ejs_crud')
.then(()=>{
    console.log("Database successfully connnected!");
})
.catch((error)=>{
    console.log("error: ",error)
})
app.use("/get", router)
app.use("/getproduct", routerP)
