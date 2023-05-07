let Emp=require("../Model/Employee")


const Controller={}
Controller.home=(req,res)=>{
    res.send("WelCome To Home Page")
}
Controller.add=(req,res)=>{
    let body=req.body
    new Emp(body).save()
                 .then(e=>res.json(e))
                 .catch(e=>res.json(e))
}
Controller.list=(req,res)=>{
    Emp.find()
       .then(e=>res.json(e))
        .catch(e=>res.json(e))

}

module.exports=Controller