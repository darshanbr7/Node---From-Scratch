const express=require("express")
const connect=require("./Config/dbconnection")
const routes=require("./Config/routes")
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.json())
const port=3009
connect()
app.use("/api",routes)
app.listen(port,()=>{
    console.log(`server is running on the port ${port}`)
})
