const express = require("express")

const app = express()

// 编写普通的中间件
// use 注册一个中间件(回调函数)
app.use((req, res, next) => {
  console.log("注册了第01个普通的中间件~");
  // res.end("Hello world")
  next()
})

app.use((req, res, next) => {
  console.log("注册了第02个普通的中间件~");
  res.end("Hello world")
})

app.use((req, res, next) => {
  console.log("注册了第03个普通的中间件~");
  res.end("Hello world")
})

app.listen(8888, () => {
  console.log("普通中间件服务器启动成功~");
})