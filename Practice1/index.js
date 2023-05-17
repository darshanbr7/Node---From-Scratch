const express=require("express")
const route=require("./Config/Router")
const app=express()

const DB=require("./Config/DatabaseConfig")
DB()
const port=3000
app.use(express.json())
app.use(route)


app.listen(port,()=>{
    console.log(`Server is Running on the port ${port}`)
})