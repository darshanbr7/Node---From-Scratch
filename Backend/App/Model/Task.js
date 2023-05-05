const mongoose=require("mongoose")
 let Employee=new mongoose.Schema({
    eId:Number,
    eName:{
        type:String,
        required:true
    },
    eSal:Number
})

// creating the model
let Emp=mongoose.model("Emp",Employee)

// export the module
module.exports=Emp