const  UserAuth=require("../Module/User")
const bcryptjs=require("bcrypt")

const jwt=require("jsonwebtoken")
const UserControler={}

UserControler.home=(req,res)=>{
    res.send(" Welcome To Home Page")
}

UserControler.register=(req,res)=>{
    let body=req.body
   let user= new UserAuth(body)
            bcryptjs.genSalt()
                    .then((salt)=>{
                        bcryptjs.hash(user.password,salt)
                                .then((encrypted)=>{
                                    user.password=encrypted
                                    user.save()
                                         .then((user)=>{
                                                       res.json(user)
                                                      })
                                          .catch(e=>res.json(e))
                                })
                    })

}

UserControler.list=(req,res)=>{
    UserAuth.find()
            .then(user=>res.json(user))
            .catch(e=>res.json(e))
}

UserControler.login=(req,res)=>{
    let body=req.body
    UserAuth.findOne({email:body.email})
            .then((user)=>{
                bcryptjs.compare(body.password,user.password)
                        .then(()=>{
                            const token={
                                _id:user._id,
                                name:user.username,
                                email:user.email
                            }

                            let gentoken=jwt.sign(token,"psa123",{expiresIn:"5d"})
                            res.json({
                                token:gentoken
                            })
                        })
                        .catch(()=>{
                                res.json("login failed")
                        })
            })
            .catch(()=>{
                res.json("Invalid  Email or Password")
            })
}

UserControler.getAccount=(req,res)=>{
    res.json(req.user)
}
module.exports=UserControler