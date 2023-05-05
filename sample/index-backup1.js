let express=require("express");
let mongoose=require("mongoose");
let app=express()
app.use(express.json())
const port=3000
app.get("/",(req,res)=>{
    res.send("data send succesfully")
})

// connect to the database  using "connect" method 
mongoose.connect("mongodb://localhost:27017")
        .then(()=>{
            console.log("connection succesfully ")
        })
        .catch((e)=>{
            console.log(e)
        })

// creating the schema
 let schema=mongoose.Schema
 let Todo=new schema({
    title:String,
    description:String,
    completed:Boolean,
    dueDate:Date,
    createdAt:Date
 })   
 
 const Task=mongoose.model("User",Todo)
 app.get("/task/list",(req,res)=>{
    User.find()
        .then((tasks)=>{
            res.json(tasks)
        })
        .catch((e)=>{
                res.json(e)
        })
 })

 // post method used for inserting data into database
 app.post("/task/addtask",(req,res)=>{
    const body=req.body
    let task=new Task(body)
    task.save()
        .then(dec=>{res.json(dec)
              console.log(dec)})
        .catch(e=>res.json(e))

 })

app.listen(port,()=>{
    console.log("sever is running on the por 3000")
})
