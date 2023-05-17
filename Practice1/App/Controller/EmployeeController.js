const Employee=require("../Model/Employee")

let Controller={}
Controller.All=(req,res)=>{
    res.json("Hello User")
}

module.exports=Controller