// JSON.stringify()
let obj={
  a:20,
  b:30,
  c:40,
  d:{
    f:100,
    dd:200
  }
}
let arr=['a','c'];
console.log(JSON.stringify(obj),JSON.stringify(obj,arr))
console.log(JSON.stringify(obj,function(key,value){
  if(typeof value=='number'){
    value=value*2
  }
  return value
},5)
)