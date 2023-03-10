import mongoose from "mongoose";
import Category from "./category.model"
const {Schema} = mongoose
const Product = new Schema({
    name: { 
        type: String,
        require:true
    },
    category:{
        type:String,     
        require:true 
    },
    price:{
        type:Number,    
        require:true
    },
    quantity:{
        type:Number,
        require:true
    }
   
   
   
  });

export default mongoose.model('Product',Product)
