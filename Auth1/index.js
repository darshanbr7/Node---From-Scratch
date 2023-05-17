const express=require("express")
const app=express();
const port=3009

// use a middleware to read or recive a data from the client side
app.use(express.json())

const route=require("./Config/Router")
app.use(route)

// connect to the mongodb// database
const Connection=require("./Config/DBConnection")
Connection()



app.listen(port,()=>{
    console.log(`servrr is running on the port ${port}`)
})
