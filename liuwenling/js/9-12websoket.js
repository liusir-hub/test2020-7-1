const http = require('http');
const express =require('express');
const app=express();
const server=http.createServer(app);
let {Server} =require('socket.io');
let io=new Server(server);


app.get('/',(req,res)=>{
  res.send('<h1>Hello world</h1>');
})  
io.on('connection',socket=>{
  console.log('a user connect')
})

server.listen('3000',()=>{
  console.log('serve listen on localhost:3000')
})



