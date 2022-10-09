var http = require('http')
var fs = require('fs')
var server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=UTF8')
  var url = req.url
  var result = url.match(/\/user\/(.+)\/(.+)/)
  console.log(result)

})
server.listen(3000)