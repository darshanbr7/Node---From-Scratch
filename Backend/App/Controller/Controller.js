const Emp=require("../Model/Task")

// creating a empltyObject
const taskController={}

      taskController.call=(req,res)=>{
         res.json("Welcome To Employee")
      }
      taskController.insert=(req,res)=>{
        let body=req.body
        new Emp(body).save()
                      .then(e=>res.json(e))
                      .catch(e=>res.json(e))
      }

      taskController.list=(req,res)=>{
        Emp.find()
        .then(e=>res.json(e))
        .catch(e=>res.json(e))
      }


      module.exports=taskController