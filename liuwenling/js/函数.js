/* 闭包 */
// function f(){
//   var a= 20
// }
// console.log(a)
//闭包第一个作用 是读取函数内不的变量
function f(){
  var a=20 
  return function b(){
    return a++
  }
}
let c=f()
console.log(c())
console.log(c())

// 闭包第二用图封装对象的思有方法和属性

function Person(a){
  var _age;
  function setAge(a){
    _age=a
  }
  function getAge(){
    return _age
  }
  return {
    setAge,
    getAge,
    name:'zhansa'
  }
}
let p = Person(20)
console.log(p.name)
p.setAge(14)
console.log(p.getAge())

function f(data){
  function a(){

    function b(){
  
    }
    return {
      bb:b
    }
  }
  return {
    ss:a,
  }
}

let vv=f().ss().bb()