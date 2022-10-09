let eventLoop=[]
let ev;
while (true){
  if(eventLoop.length>0){
    ev=eventLoop.shift()
  }
  try{
    ev()
  }catch(err){
      reportError(err)
  }
}