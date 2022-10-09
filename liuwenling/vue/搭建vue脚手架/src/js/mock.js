console.log('mockmockmockmockmockmockmockmockmockmockmockmockmockmockmockmock')
import axios from 'axios'
let baseurl='https://mock.apifox.cn/m1/1573012-0-default/xhr/1'
// axios({
//   method:'POST',
//   url:baseurl,
//   data:{
//     first:'1',
//     second:'2'
//   }
// }).then(res=>console.log(res))
const canclerequest=axios.CancelToken
const source=canclerequest.source()

axios.interceptors.request.use(config=>{
  config.headers['cookie']=localStorage.getItem('cookie')
  config.sourceToken=source.token
  console.log(config)
  if(true){
    source.cancel()
  }else{
    return config
  }
},err=>{
  console.log(err)
})

class getdata{
  constructor(){

  }
  request(config){
    const {method='GET',url='',data={}}=config
    let ajax=new XMLHttpRequest()
    ajax.open(method,url,true)
    ajax.send(data)
    ajax.onreadystatechange=function(){
      if(ajax.readyState==4){
        if(ajax.status==200){
          console.log(ajax.response)
        }
      }
    }
  }
}



axios.post(baseurl).then(res=>console.log(res))







export default function func(){
  console.log('1000')
}
// console.log(a)

if(process.env.NODE_ENV!=='production'){
  console.log('in the development')
}