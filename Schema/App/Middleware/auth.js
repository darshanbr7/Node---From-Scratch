const auth={}
const bcrypt=require("bcrypt")
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

module.exports=auth