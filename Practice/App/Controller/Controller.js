let Emp =require("../Module/Employee")

let Controller={}
Controller.insert=function(req,res){
   let Body= req.body
    new Emp(Body).save()
    .then(e=>res.json(e))
    .catch(e=>res.json(e))
}

Controller.home= function(req,res){
    res.send(" Welcome to Home Page")
}

// find by id
Controller.byId= function(req,res){
    let id=req.params.id
    Emp.findById(id)
    .then(e=>res.json(e))
    .catch(e=>res.json(e))
   
}

// find by name
Controller.byName=function(req,res){
    let eName=req.params.eName
    Emp.find({eName:eName})
        .then(e=>res.json(e))
        .catch(e=>res.json(e))
    
}
// find all
Controller.all=function (req,res){
    Emp.find()
    .then(e=>res.json(e))
    .catch(e=>res.json(e))

}

//update by name 
Controller.updatebyName=function(req,res){
    let eName=req.params.eName
    let body=req.body
    Emp.findOneAndUpdate(eName,body,{new:true,runValidatror:true})
            .then(e=>res.json(e))
            .catch(e=>res.json(e))
}
module.exports=Controller