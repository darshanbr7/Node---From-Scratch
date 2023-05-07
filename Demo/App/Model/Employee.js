 const mongoose=require("mongoose")

 const Employee=new mongoose.Schema({
    eId:Number,
    eName:{
        type:String,
        required:true
    },
    eEmail:String,
    eType:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
 })
 

 const Emp=mongoose.model("Emp",Employee)

 module.exports=Emp