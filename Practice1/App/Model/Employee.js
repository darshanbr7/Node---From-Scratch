const mongoose=require("mongoose")
const autoIncrement = require('mongoose-auto-increment'); 

// two Apprch to create a Schema 
// 1
let Schema=mongoose.Schema
let Empdetails=new Schema({
    
})

// 2
/* let Empdetails= new mongoose.Schema({})*/ 
let Employee= mongoose.model("Employee",Empdetails)
 module.exports=Employee

 