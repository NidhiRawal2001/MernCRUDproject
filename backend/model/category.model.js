import mongoose from "mongoose";

const Category = new mongoose.Schema({
    name: { 
        type: String,
        require:true
    },
    des:{
        type:String,
        require:true
    }
   
  });
  export default mongoose.model("Category",Category)