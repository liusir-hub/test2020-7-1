// import {m, cc,foo} from './9-11module'
// console.log(m,cc,foo())

// import * as mmmm from './9-11module'
// console.log(mmmm.m)

// import niming from './9-11module'
// niming(123)

// import niming ,{m,cc} from './9-11module'

// export {mmmm,vv} from './9-11module'//复合写法
// //接口改名
// export {mm as mymm} from './9-11module'
// a.addEventListener('click',e=>{
//   import('./9-11module.js')
//   .then()
// })

//import() 按需加载 同步加载
  
  let {foo,cc} =await import('./9-11module.js')
  console.log(foo,cc)