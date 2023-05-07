const express=require("express")
let app=express()
app.use(express.json())
const port=3000

const ConnectDB=require("./Config/ConnectDB")
ConnectDB()

// import the route
const route=require("./Config/Router")
app.use(route)

app.listen(port,()=>{
    console.log(`server is running on the port ${port}`)
})