const mongoose = require("mongoose")
const isEmail=require("validator/lib/isEmail")

const User = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "UserName is  neccessery"],
        minLength: 4,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is  neccessery"],
        minLength: 8,
        maxLength: 128
    },
    email: {
        type: String,
        required: [true, "Email is  neccessery"],
        validate:{
            validator:function(value){
                return  isEmail(value)
            },
            message:function(){
                return "Please enter valid email"
            }
        },
        unique: true
    }


})

const UserAuth = mongoose.model("UserAuth", User)

module.exports = UserAuth