const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack=require('webpack')
console.log(process.env.NODE_ENV)
module.exports=merge(common,{
  mode:'development',
  devtool:'inline-source-map',
  devServer:{
    // contentBase:'./dist'
    open:true,
    hot:true
  },
  plugins:[
      new webpack.HotModuleReplacementPlugin()
  ]
})