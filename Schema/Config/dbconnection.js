const mongoose=require("mongoose")
const connect=()=>{
    mongoose.connect("mongodb://localhost:27017/Books")
            .then(()=>{
                console.log("connected to database")
            })
            .catch(()=>{
                console.log("not connected")
            })
}
module.exports=connect