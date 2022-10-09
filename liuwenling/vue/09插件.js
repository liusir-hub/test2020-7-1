
import filte from './09filter.js'
export default {
  install:function(Vue,options){
    Vue.myme=function(){
      console.log('MyPlugin')
    }
    Vue.mixin({
      data(){
        return {
          vava:200
        }
      }
    })
    for(let key of Object.keys(filte)){
      Vue.filter(key,filte[key])
    }
    Vue.prototype.$getdata=function(){
      console.log('adsfdsff')
    }
  }
}