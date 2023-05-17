const express=require("express")
const route=express.Router()

// inmport the controller
const SignupController=require("../App/Controller/SignupController")
const LoginController=require("../App/Controller/Login")

// generating the Routers

route.get("/",SignupController.home)
route.post("/signup",SignupController.signup)
route.delete("/delete/:name",SignupController.delete)
route.get("/all/user",SignupController.list)
route.put("/update/:name",SignupController.update)
route.get("/get/:email",SignupController.findbyEmail)
route.post("/user/login",LoginController.login)



module.exports=route