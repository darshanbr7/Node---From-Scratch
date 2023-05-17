const mongoose=require('mongoose')
const Connection=()=>{
    mongoose.connect("mongodb://localhost:27017/AMS")
            .then(()=>{
                console.log("Connected to Database")
            })
            .catch((e)=>{
                console.log(e.message)
            })
}
module.exports=Connection