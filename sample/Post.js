let express=require("express")

let app=express();
// use middleware the to read the data from 
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("data send succesfully")
})

app.post("/user",(req,res)=>{
    let body=req.body
    console.log(body)
})
app.listen(3000,()=>{
    console.log("sever is running on the por 3000")
})