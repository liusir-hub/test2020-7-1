const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')


module.exports={
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'[name].bundle.js'
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:'你乃纳奥',
      templateContent: `<html><body><div id='app'></div></body></html>`
    }),
    new MiniCssExtractPlugin({
      // path:path.resolve(__dirname,'dist/css'),
      filename:'[name].css',
      chunkFilename: "[id].css"
    })
  ],
  module:{
    rules:[
      {
        test:/(\.scss|\.css)$/,
        use:[
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test:/\.(jpg|png|svg|gif)$/,
        use:['file-loader']
      },
      {
        test:/\.(woff|woff2|eot|ttf|otf)$/,
        use:['file-loader']
      }
    ]
  },

}