const express=require("express")
const route=express.Router()
const UserControler=require("../App/Controller/UserController")
const Authenticate=require("../App/Middleware/Authenticate")

route.get("/",UserControler.home)
route.post("/add",UserControler.register)
route.get("/all/user", UserControler.list)
route.post("/user/login",UserControler.login)
route.get("/get/user",Authenticate,UserControler.getAccount)
module.exports=route