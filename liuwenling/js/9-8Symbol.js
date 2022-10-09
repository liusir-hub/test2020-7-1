let b =Symbol()
let c=Symbol();
let a={
  b:'bb',
  [b]:'b',
  [c](){

  }
}
console.log(a[b])
let set=new Set([1,2,3,45])
console.log(set)