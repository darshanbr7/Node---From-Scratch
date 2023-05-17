const mongoose=require("mongoose")
const isEmail=require("validator/lib/isEmail")
const Schema=mongoose.Schema
const Auth=new Schema({
    name:{
        type:String,
        required:[true ,"UserName is must Mandatory"],
        unique:true
    },
    email:{
        type:String,
        required:[true ,"Email is must Mandatory"],
        unique:true,
        validate:{
            validator:(value)=>{
                return isEmail(value)
            },
            message:()=>{
                return " Enter the Valid Email"
            }
        }
    },
    password:{
        type:String,
        required:[true ,"Password is must Mandatory"],
        minLength:5,
        maxLength:128
      
    }
})

const Login=mongoose.model("Login",Auth)
module.exports=Login