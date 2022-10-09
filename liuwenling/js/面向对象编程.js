//ES6 中并没有引入类的概念是通过构造函数来实现的
function Person(a){
  this.name=a
  this.say=function(){
    return this.a
  }
}
let P=new Person('lisi');
console.log(P)
//缺点 一些方法属性不能共享，造成内存浪费  
let P1=new Person('zhangsan');
console.log(P.say===P.P1)
//此时引入函数的prototype属性，js规定每个函数都有一个prototype属性 且绑定到prototype上的属性都可以被实例继承
Person.prototype.hi=function(){
  return this.name+'hi'
}
console.log(P.hi===P1.hi)
//继承
function Programa(name,age){
  Person.call(this,name);
  this.age=age
}
Programa.prototype.white=function(){
  return this.age+'white'
}
// Object.assign(Programa.prototype,Person.prototype)
// Programa.prototype=Object.create(Person.prototype)
Programa.prototype=Object.create(P.__proto__)
Programa.prototype=Object.create(P)
let P2=new Programa('zhznasan',20)
console.log(P2,P2.hi())
//原型链的概念
//在实例上拆查询某个属性或者方法时候，如果没有找到会想该实例的原型对象上查找如没有继续往下查找，直到找到为止，最终都是查找到Object.prototype 因为他的原型位null了
//new 操作符做了什么  1：首先创建新对象-将this指针指向它，2：将对象的prototype与构造函数的prototype关联3：默认返回这个对象
//实现一个_new操作符
function _new(constructor,pramas){
  let args = Array.from(arguments);
  let con=args.shift()
  let pra=args;
  let obj=Object.create(con.prototype);
  let result = con.apply(obj,pra)
  return (typeof result=='object'&&result!==null)?result:obj
}
console.log(_new(Person,'zh',10))
//ES6 有了类的概念 说是ES5的语法糖
class Animal{
  #age=20;//私有属性概念  不能继承 实例也得不到 仅类对象自己使用
  //静态属性  可以被继承 但是实例上不存在  尽可继承到子类上
  static age=18 
  constructor(a){
    //构造函数  不写默认 也会自己生成 如果又继承存在还会自动内部调用super
    this.age=a
  }
  static say(){
    return this.age  //静态方法中的this指向的是类本身 在继承中指向的是子类 绝不是实例
  }
  say(){
    return this.age
  }
}
let A=new Animal(10)
console.log(A,A.say(),Animal.say())
class Cat extends Animal{
  static age =100
  constructor(n){
    super()
    this.nn=n
  }
}
let C=new Cat(8)
console.log(C,Cat.say())

//写一个拖拽类---空置Dom完回来写
class grag {
  constructor(node){
    this=node;
    this.x=0;
    this.y=0;
  }
  init(){
    this.onclick(e)=function(){
      this.x=e.clientX;
      this.y=e.clientY;
      let left=this.offsetLeft+e.offsetLeft;
      this.addEventListener('mousemove',(e)=>{
        let X=e.clientX-this.x;
        let Y=e.clickY-this.y;
        left+=X;
        this.style.left=left+'px'
      })
    }
  }
  click(e){
    
  }
  move(e){

  }
  stop(){

  }
}