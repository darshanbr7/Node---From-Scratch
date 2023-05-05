var express=require("express")
let app=express()
app.use(express.json())
const port=3000;
let users=[
    {id:101,name:"rose"},
    {id:102,name:"dany"}
]
app.get("/",(req,res)=>{
            res.send("welcome to express")
})

app.get("/users",(req,res)=>{
   // res.json(user)
   res.send(users)
   
})
 // recive the id  from the client
app.get('/users/:id',(req,res)=>{
    const id=req.params.id
   const user=users.find(user=>user.id==id)
   if(user){
    res.json(user)
   }else{
    res.json({})
   }
    

   // post method
   app.post('/user',(req,res)=>{
    let body=req.body
    res.send(body)
    console.log(body)
   })

})

app.listen(port,()=>{
    console.log(`  server running on ${port}`)
}) 