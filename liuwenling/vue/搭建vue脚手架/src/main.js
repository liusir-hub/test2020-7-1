import './css/index.scss'
import './js/index.js'

import fun from './js/mock.js'


let a=200
let obj=[1,2,3,4,56,7]
console.log(...obj)
document.onclick=fun
interface cll {
  abg:Number,
  n:String
}
type user={
  asdf:Number
}
interface hh{
  (a:Number,s:String):void;
}
type foo=(a:Number,s:String):void;
type oo=Pick<cll,'abg'>


interface all<T=Number>{
    age:T
}