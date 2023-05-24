const express=require("express")
const routes=express.Router()
const usercontroller=require("../App/Controller/usercontroller/usercontroller")
const auth=require("../App/Middleware/auth")

routes.get("/",usercontroller.home)
routes.post("/register",auth.register,usercontroller.register)
routes.get("/get",usercontroller.list)

module.exports=routes