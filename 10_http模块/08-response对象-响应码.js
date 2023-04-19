const http = require("http")

// 创建一个服务器
const server = http.createServer((req, res) => {

  // 设置状态码
  // 方式1：直接给属性赋值
  // res.statusCode = 400;

  // 方式2：和Head一起设置
  res.writeHead(503)

  res.end("Hello Nodemon")
})


// 启动服务器 并且制定端口号和主机
server.listen(8888, "0.0.0.0", () => {
  console.log("服务器启动成功~");
})  