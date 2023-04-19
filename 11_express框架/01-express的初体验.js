const express = require("express")

// express 其实是一个函数：createApplication

// 返回一个app
const app = express()

// 监听默认路径
app.get('/', (req, res, next) => {
  res.end("Hello Express")
})

app.post('/', (req, res, next) => {
  res.end("Hello POST Express")
})

// 开启服务器监听
app.listen(8000, () => {
  console.log("express初体验服务器启动成功~");
})
