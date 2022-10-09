let obj = Object();
let obj1 = Object(null)
console.log( obj.__proto__,obj1.__proto__,obj1 instanceof Object)

console.log(Object.prototype.toString.call('123'))
console.log(Object.prototype.toString.call(123))
console.log(Object.prototype.toString.call([12,3,4]))
console.log(Object.prototype.toString.call({}))
console.log(Object.keys({}).length)
console.log({a:2,b:2}.hasOwnProperty('a'))
