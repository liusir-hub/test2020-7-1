const http = require('http')
const fs = require('fs') //异步读取
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=UTF-8')

  if (req.url === '/index/hi') {
    res.write('<h1>你好啊初学者</h1>')
    fs.readFile('./a.html', function (err, data) {
      res.end(data)
      //这里这么写永远不会显示，因为文件读取是异步的，所以先执行了下面的res.end再也不会执行这里了
    })
  } else {
    res.write('老人家了')
  }
  res.end('这是服务器')
})
server.listen(3000)