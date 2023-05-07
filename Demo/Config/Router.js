const express=require("express")
const route=express.Router()

let Controller=require("../App/Controller/Controller")
const ETypeController=require("../App/Controller/eTypeController")
route.post("/addtype",ETypeController.add)
route.get("/",Controller.home)
route.post("/add",Controller.add)
route.get("/all",Controller.list)

module.exports=route
