const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req.headers)
    res.end()
})
      server.listen(3000,err=>{

})