const express=require("express")
let app=express();
const port=3000

// using the in-built middleware   to read the data  which is sent by the client-side
app.use(express.json())

// application level middleware
app.use(function(req,res,next){
    console.log(`${req.method}  ${req.url}  ${req.ip} ${req.hostname}`)
    next()
})


// importing mongosee
const mongoose=require("mongoose")

// conecting to the database
mongoose.connect("mongodb://localhost:27017/Employee")
        .then(()=>{console.log("connected to database")})
        .catch(e=>{console.log(e)})

        // creating a schema
 let Empl= new mongoose.Schema({
    eId:{
        type:Number
    },
    eName:{
        type:String,
        required:[true,"message- title is mandatery"]    
    },
    eEmail:String,

  })

  // creating a model
  const Emp=mongoose.model("Emp",Empl)

  app.post("/add/employee",(req,res)=>{
    let body=req.body
    new Emp(body).save()
                .then(e=>res.json(e))
                .catch(e=>res.json(e))
  })

  app.get("/error",(req,res)=>{
      throw  new Error("not Significant")
  })

  app.use(function(err,req,res,next){
    console.log("error handler")
    res.json(err.message)

  })



app.listen(port,()=>{
    console.log(` server is running on the port ${port}`)
})