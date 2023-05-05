const express=require("express")
let app=express()
// importing the database conection
 const ConnectionDB=require("./Config/Database")

 // importing the taskController
 const taskController=require("../Backend/App/Controller/Controller")

app.get("/",taskController.call)
app.use(express.json())
app.post("/insert",taskController.insert)

const port=3000

// calling the dataBase function
ConnectionDB()

app.get("/allTask",taskController.list)




app.listen(port,()=>{
    console.log(` Server is running on Port Number ${port}`)
})