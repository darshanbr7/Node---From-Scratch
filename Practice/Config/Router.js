let express=require("express")
let router=express.Router()
let Controller=require("../App/Controller/Controller")

router.get("/",Controller.home)


module.exports=router