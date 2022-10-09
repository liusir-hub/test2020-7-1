let arr=[1,2,3,4];
for(let i in arr){
  console.log(i)
}

let i=0;
while(arr.length>0){
  arr.shift();
  i++
  console.log(i)
}
let arr1=[1,2,3,4,5,6];
let arr2=[6,4,3];
let re=
arr1.filter(function(i){
  return this.includes(i)
},arr2)
console.log(re)