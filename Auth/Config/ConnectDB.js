const mongoose=require("mongoose")

const ConnectDB=()=>{
    mongoose.connect("mongodb://localhost:27017/User")
            .then(()=>{
                console.log("connected to mongodb")
            })
            .catch((e)=>{
                console.log(e)
            })
}

module.exports=ConnectDB