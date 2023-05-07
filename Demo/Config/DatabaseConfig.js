const mongoose=require("mongoose")

let ConnectDB=()=>{
    mongoose.connect("mongodb://localhost:27017/Employee")
            .then(()=>{
                console.log("connected to mongodb")
            })
            .catch((e)=>{
                console.log(e)
            })
}

module.exports=ConnectDB