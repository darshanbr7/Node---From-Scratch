const express=require("express")
let route=express.Router()
const Controller=require("../App/Controller/EmployeeController")
route.get("/",Controller.All)



module.exports=route