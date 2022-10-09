// 可以 修改原来数组的方法   push pop  unshift shift splice reverse sort
let arr = [12,3,4,55,5]
console.log(arr.sort((a,b)=>{return a-b}))
let tem;
for(let i=0;i<arr.length-1;i++){
  for(let j=0;j<arr.length-i-1;j++){
    if(arr[j]>arr[j+1]){
      [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
    }
  }
}
for(let i=0 ; i<arr.length-1 ;i++){
  let min=i;
  for(let j=i+1;j<arr.length;j++){
    if(arr[min]>arr[j]){
      min=j
    }
  }
  [arr[min],arr[i]]=[arr[i],arr[min]]
}
console.log(arr)

let arr1=['a','b','d']
let ob={
  a:'aa',
  c:'cc',
  b:'bb',
  d:'dd'
}
let arrr=arr1.map(function(item,index){
  return this[item]
},ob)
console.log(arrr)
let arr2=arr1.filter((item,index)=>{
  return  ob[item]=='bb'
},ob)
console.log(arr2)
console.log(arr1.indexOf('a'))//返回元素在数组中第一次出现的位置
console.log(arr1.splice(1,0,'b','c','d'))
console.log(arr1.slice(1,3))
console.log('hello'.split('l'))
console.log(Array.from('hello'))
console.log(Array.of(1,2,34,5))
console.log([12,3,45,6].find((item)=>item>40))//返回符合条件的第一个元素
Array.prototype.fin=function(fun,arr=this){
  let tem=[]
  for(let i =0;i<arr.length;i++){
    if(tem[0]){
      break;
    }else{
      if(fun(arr[i],i,arr)){
        tem.push(arr[i])
      }
    }
  }
  return tem[0]
}
console.log([1,1,1,2,3,3].fin(item=>item>2))
console.log([12,2,34,5].findIndex(item=>item>30))
console.log(arr1.entries(),arr1.keys(),arr1.values())
console.log(arr1.includes('a'))
console.log([12,44,[2,4,2]].flat(100))
console.log(isNaN(NaN))