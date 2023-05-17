const Login=require("../Model/Signup")
const bcrypt=require("bcrypt")

const LoginController={}
LoginController.login=(req,res)=>{
    const body=req.body
     Login.findOne({email:body.email})
     .then((user)=>{
        ///res.json(user)
        bcrypt.compare(body.password,user.password)
               .then(()=>{
                res.json(" Succesfully login")
               })
               .catch(()=>{
                res.json("failure")
               })
    })
    .catch(()=>{
        res.json("Invalid UserName or Password")
    })
    
           
}

module.exports=LoginController