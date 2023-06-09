const http = require("http")

// 创建一个服务器
const server = http.createServer((req, res) => {

  // 设置响应headers
  // 设置方式一： 
  // res.setHeader("Content-Type", "text/plain")

  // 设置方式二：
  res.writeHead(200, {
    "Content-Type": "application/json;charset=utf8"
  })

  res.end("Hello Nodemon")
})


// 启动服务器 并且制定端口号和主机
server.listen(8888, "0.0.0.0", () => {
  console.log("服务器启动成功~");
})  