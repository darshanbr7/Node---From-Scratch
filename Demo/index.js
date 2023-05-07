const express=require("express")
let app=express()
app.use(express.json())
const port=3000
const route=require("./Config/Router")
const ConnectDB=require("./Config/DatabaseConfig")
app.use(route)

ConnectDB()
app.listen(port,()=>{
    console.log(`server is running on the port ${port}`)
})

