const Login=require("../Model/Signup")
const bcrypt=require("bcrypt")
const SignupController={}

SignupController.home=(req,res)=>{
        res.send("Welcome to Home Page")
}

SignupController.signup=(req,res)=>{
    let body=req.body
    let login=new Login(body)
                 bcrypt.genSalt()
                        .then((salt)=>{
                            bcrypt.hash(login.password,salt)
                                    .then((encrypted)=>{
                                        login.password=encrypted
                                        login.save()
                                             .then((user)=>{
                                                res.json(user)
                                             })
                                             .catch((e)=>{
                                                res.json(e.message)
                                             })
                                    })
                                    .catch((e)=>{
                                        res.json(e.message)
                                    })
                        })
                        .catch((e)=>{
                            res.json(e.message)
                        })   
}

SignupController.list=(req,res)=>{
    Login.find()
            .then((user)=>{
                res.json(user)
            })
            .catch((err)=>{
                res.json(err.message)
            })
}
SignupController.update=(req,res)=>{
    const name=req.params.name
    const body=req.body
    Login.findOneAndUpdate({name:name},body,{runValidator:true,new:true})
            .then((ul)=>{
                res.json(ul)
            })
            .catch((err)=>{
                res.json(err.message)
            })

}

SignupController.delete=(req,res)=>{
    const name=req.params.name
    const email=req.params.email
    Login.findOneAndRemove({name:name}||{email:email})
        .then((user)=>{
            res.json(user)
        })
        .catch((err)=>{
            res.json(err.message)
        })
}

SignupController.findbyEmail=(req,res)=>{
    let email=req.params.email
    Login.find({email:email})
            .then((user)=>{
                res.json(user)
            })
            .catch((err)=>{
                res.json(er.message)
            })
}

module.exports=SignupController