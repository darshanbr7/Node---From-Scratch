const user=require("../../Model/user/user")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
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
usercontroller.login=(req,res)=>{
    const body=req.body
    user.findOne({email:body.email})
        .then((user)=>{
            bcrypt.compare(body.password,user.password)
            .then((result)=>{
                if(result){
                    const token={
                        _id:user._id,
                        username:user.username,
                        email:user.email
                    }
                    const gentoken=jwt.sign(token,"psa123",{expiresIn:"5d"})
                    res.json({
                        "token":`${gentoken}`
                    })
                }else{
                    res.status(401).json("please enter valid Email/password")
                }
            })
            .catch((error)=>{
                res.json(error.message)
            })
            
        })
        .catch((error)=>{
            res.json(error.message)
        })
}
usercontroller.user=(req,res)=>{
  
     res.json(req.user.username)
}
module.exports=usercontroller