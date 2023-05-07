const mongoose=require("mongoose")

const Type=new mongoose.Schema({
    eType:{
        type:String,
        required:true
    }
})

const EType=mongoose.model("EType",Type)

module.exports=EType
