const mongoose=require("mongoose")
const isEmail=require("validator/lib/isEmail")
const Schema=mongoose.Schema
const userdb=new Schema({
    username:{
        type:String,
        required:[true,"username is needed"],
        unique:true
    },
    email:{
        type:String,
        required:[true,"email is needed"],
        unique:true,
        validate:{
            validator:(value)=>{
                return isEmail(value)
            },
            message:()=>{
                return "please enter vallid Email format"
            }
        }
    },
    password:{
        type:String,
        required:[true,"password is needed"]
        
    }
})
const user=mongoose.model("user",userdb)
module.exports=user