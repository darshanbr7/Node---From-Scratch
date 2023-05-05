let express=require("express")
let app=express()
const port=3000

// import mongosee
let Mongoose=require("mongoose")

//convert into medelvare
app.use(express.json())

//connect to the database

Mongoose.connect("mongodb://localhost:27017")
        .then(()=>{
            console.log("connected succesfully")
        })
        .catch((e)=>{
            console.log(e)
        })

// create a Schema with fields
let Employee=new Mongoose.Schema({
     eId:{
        type:Number
    },
    eName:{
        type:String,
        required:[true,"message- title is mandatery"]     // validating the required field
    },
    eEmail:String,
    Date:{
        type:Date,
        default:Date.now()  // setting defalt value 
    }

})

// create a model 
 let Emp=Mongoose.model("Emp",Employee)

 // recive a data from client side
 app.post("/add/employee",(req,res)=>{
    let body=req.body
    new Emp(body).save()
                .then((emp)=>{ 
                   res.json(emp)
                        })
                        .catch((e)=>{
                            res.json(e)
                        })
 })

app.get("/",(req,res)=>{
    res.send(" Welcome")
})

app.get("/all",(req,res)=>{
    Emp.find()
        .then((list)=>{res.json(list)})
        .catch(e=>res.json(e))
})

// find the object by the "id"
app.get("/find/:id",(req,res)=>{
    let id=req.params.id
    Emp.findById(id)
    .then(e=>res.json(e))
    .catch(e=>res.json(e))
})

// find by "eName"
app.get("/get/name/:eName",(req,res)=>{
    let eName=req.params.eName
      Emp.find({eName:eName})
      .then(e=>res.json(e))
        .catch(e=>res.json(e))
     
})


// update the eName
app.put("/update/:id",(req,res)=>{
    const id=req.params.id
    const body=req.body
    Emp.findByIdAndUpdate(id,body,{new:true,runValidators:true})
       .then(e=>res.json(e))
        .catch(e=>res.json(e))
})
 


// for deleting all the values  from the database
app.delete("/deleteAll",(req,res)=>{
    Emp.deleteMany()
        .then(e=>res.json(e))
        .catch(e=>res.json(e))
})

app.listen(port,()=>{
    console.log(` server is running to ${port}`)
})