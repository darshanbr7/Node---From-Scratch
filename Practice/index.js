let express=require("express")
let app=express();
let MongoConfiguration=require("./Config/MongoConfiguration")

const port=3000

let router=require("./Config/Router")


app.use(router)
MongoConfiguration()



/* route.use(express.json())
route.get("/",Controller.home)


route.post("/add/Employee",Controller.insert)

route.get("/find/:id",Controller.byId)

route.get("/all",Controller.all)

route.get("/get/:eName",Controller.byName)

route.put("/update/:eName",Controller.updatebyName) */



app.listen(port,()=>{
    console.log(` server is running on the port ${port}`)
})