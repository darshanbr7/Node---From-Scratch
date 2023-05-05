const mongoose=require("mongoose")

let Employee=new mongoose.Schema({
    eId:Number,
    eName:{
            type:String,
            required:[true,"Employee Name is Needed"]
           },
    eSal:Number
})

let Emp=mongoose.model("Emp",Employee)

module.exports=Emp  