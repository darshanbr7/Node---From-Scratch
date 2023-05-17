const mongoose=require("mongoose")
 let Connect=()=>{
    mongoose.connect("mongodb://localhost:27017/Nodejs")
        .then(()=>{
            console.log("Connected to MongoDb")
        })
        .catch((e)=>{
            console.log(e.message)
        })
 }
 module.exports=Connect

     