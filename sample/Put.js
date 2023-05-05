let  express=require("express")
let app=express();
app.use(express.json())
let users=[
    {id:101,name:"rose"},
    {id:102,name:"dany"}
]

app.get("/",(req,res)=>{
    res.send("welcome to express")
})

app.get("/user",(req,res)=>{
    res.send(users)
})

app.put("/user/:id",(req,res)=>{
    let id=req.params.id
    let body=req.body
   
    
    res.send(`updated the user on the ${id}`)
})

app.listen(3000,()=>{
    console.log("sever is running on the por 3000")
})