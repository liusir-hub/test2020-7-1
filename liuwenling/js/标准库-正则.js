
let a= /abc/;
let str='sahfwaefhewjfk,asabc dsfs,df'
console.log(str.match(a))
console.log(str.replace(a,'fff'))
console.log(str.replace(/(\w+)\s(\w+)/,'$\' $`$&'))
console.log(str.split(/a/g))
console.log(str.search(a))

console.log(isNaN(NaN))

let hml='<div><a>ssew</a><strong class="box">的手法首发</strong></div>'
let r=/<(\w+)([^<]*)>[^<]*<\/\1>/g
console.log(hml.match(r))