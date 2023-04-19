const http = require("http")

// 创建一个服务器
const server = http.createServer((req, res) => {
  res.end("Hello Nodemon")

  // res.end 继承了 fs.writeStream 做了两件事 res.write("Hello Server") res.close()
})


// 启动服务器 并且制定端口号和主机
server.listen(8888, "0.0.0.0", () => {
  console.log("服务器启动成功~");
})