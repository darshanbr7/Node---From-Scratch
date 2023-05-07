const EType=require("../Model/Type")

const ETypeController={}

ETypeController.add=(req,res)=>{
    let body=req.body
    new EType(body).save()
                    .then(ele=>res.json(ele))
                    .catch(e=>res.json(e))
}

module.exports=ETypeController