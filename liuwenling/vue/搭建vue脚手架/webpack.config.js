// const path=require('path')
// const HtmlWebpackPlugin=require('html-webpack-plugin')
// const {CleanWebpackPlugin}=require('clean-webpack-plugin')
// const webpack= require('webpack')
// module.exports={
//   mode:'development',
//   entry:'./src/main.js',
//   output:{
//     path:path.resolve(__dirname,'dist'),
//     filename:'[name].bundle.js'
//   },
//   devtool:'inline-source-map',
//   devServer:{
//     // contentBase:'./dist'
//     open:true,
//     hot:true
//   },
//   plugins:[
//     new CleanWebpackPlugin(),
//     new HtmlWebpackPlugin({
//       title:'你乃纳奥',
//       templateContent: `<html><body><div id='app'></div></body></html>`
//     }),
//     new webpack.HotModuleReplacementPlugin()
//   ],
//   module:{
//     rules:[
//       {
//         test:/(\.scss|\.css)$/,
//         use:[
//           'style-loader',
//           'css-loader',
//           'sass-loader'
//         ]
//       },
//       {
//         test:/\.(jpg|png|svg|gif)$/,
//         use:['file-loader']
//       },
//       {
//         test:/\.(woff|woff2|eot|ttf|otf)$/,
//         use:['file-loader']
//       }
//     ]
//   },

// }