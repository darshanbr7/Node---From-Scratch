const http=require("http")
let date=new Date();
let port=8080
function setDate(){
  
  return  date.toLocaleTimeString()
}
let server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("Hello Node Js")
    }
    else if(req.url==="/time"){
        res.end(
           date.toLocaleTimeString()
         )
    }
}
   )
server.listen(port,()=>{
    console.log("server is running on the port 8080")
})
