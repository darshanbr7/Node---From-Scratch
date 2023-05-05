const mongoose=require("mongoose")

const ConnectionDB=()=>{
    mongoose.connect("mongodb://localhost:27017/Employee")
            .then(()=>console.log("succesfully connected  to database"))
            .catch(e=>console.log(e))
}

// exporting the ConnectionDB function

module.exports=ConnectionDB