let jwt=require("jsonwebtoken")
const UserAuth=require("../Module/User")
let Authenticate=(req,res,next)=>{
  let token=req.header("Authorization")
  let tokendata
  try{
    tokendata=jwt.verify(token,"psa123")
    UserAuth.findById(tokendata._id)
            .then((user)=>{
                req.user=user
                next()
            })
            .catch(e=>res.json(e))


  }catch(e){
    res.json(e.message)
  }
}
module.exports= Authenticate
