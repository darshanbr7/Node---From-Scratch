const user=require("../../Model/user/user")
const bcrypt=require("bcrypt")
const usercontroller={}
usercontroller.home=(req,res)=>{
    res.json("welcome to home page")
}
usercontroller.register=(req,res)=>{
    const body=req.data
    new user(body).save()
                    .then((user)=>{
                        res.json(user)
                    })
                    .catch((error)=>{
                        res.json(error)
                    })
   
    
}
usercontroller.list=(req,res)=>{
    user.find()
        .then((user)=>{
            res.json(user)
        })
        .catch((error)=>{
            res.json(error)
        })
}
module.exports=usercontroller