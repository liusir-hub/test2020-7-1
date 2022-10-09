



let obj ={
  a:10,
  b:20
}
function foo(b=0,c){
  console.log( this.a+b+c)
}
Function.prototype.mycall=function(context){
  context.fn=this;
  let args=[...arguments].slice(1)
  let result=context.fn(...args)
  delete context.fn
  return result
}
Function.prototype.myBind=function(context){
  let _this=this
  // let args=[...arguments].slice(1)
  let args=[...arguments].slice(1)
  console.log(args)
  return function(){
    console.log(...arguments)
    context.fn=_this
    let result=context.fn(...args,...arguments)
    delete context.fn
    return result
  }
}
foo.myBind(obj,2)(3)
function axios(){
  console.log('1111111')
}
function debounce(fn,delay){
  let Timer=null;
  return function(){
    if(Timer){return}
    Timer=setTimeout(fn,delay)
  }
}
debounce(axios,1000)