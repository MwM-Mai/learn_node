const express = require("express")

const app = express()

app.get("/products/:id/:name", (req, res, next) => {
  console.log(req.params);
  res.end("商品的详情数据~")
})

app.get("/login", (req, res, next) => {
  console.log(req.query);
  res.end("用户登录成功~")
})

app.listen(8000, () => {
  console.log("params参数解析服务器启动成功~");
})