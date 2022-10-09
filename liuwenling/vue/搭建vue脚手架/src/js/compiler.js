const compiler=require('vue-template-compiler');
const tem="<p>{{message}}</p>"

let res=compiler.compile(tem)
console.log(res)
let arr=[1,2,3,4]
for(let i in arr){
  console.log(i)
}
// "with(this){return _c('p',[_v(_s(message))])}"
//_c createElement _v createTextVnode _s toString
// {
//   ast: {
//     type: 1,
//     tag: 'p',
//     attrsList: [],
//     attrsMap: {},
//     rawAttrsMap: {},       
//     parent: undefined,     
//     children: [ [Object] ],
//     plain: true,
//     static: false,
//     staticRoot: false
//   },
//   render: "with(this){return _c('p',[_v(_s(message))])}",
//   staticRenderFns: [],
//   errors: [],
//   tips: []
// }