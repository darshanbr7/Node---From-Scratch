const auth={}
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const user=require("../Model/user/user")
auth.register=(req,res,next)=>{
    const body=req.body
    bcrypt.genSalt()
            .then((salt)=>{
                bcrypt.hash(body.password,salt)
                        .then((encrypt)=>{
                            body.password=encrypt
                            req.data=body
                            next()
                        })
                        .catch((error)=>{
                            res.json(error.message)
                        })
            })
            .catch((error)=>{
                res.json(error.message)
            })
}
auth.login=(req,res,next)=>{
    const token=req.header('Authorization')
    
    let tokendata ;
    try{
        if(token){
                tokendata=jwt.verify(token,"psa123")
                user.findOne({username:tokendata.username})
                        .then((user)=>{
                            req.user=user
                            next()
                        })
                        .catch((err)=>{
                            res.json(err.message)
                            
                        })
        }else{
            res.status(401).json("not authenticated")
        }
    }catch(error){
        res.json(error)
    }
}

module.exports=auth