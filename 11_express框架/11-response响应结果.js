const express = require("express")

const app = express()

app.get("/products/:id/:name", (req, res, next) => {
  console.log(req.params);
  res.end("商品的详情数据~")
})

app.get("/login", (req, res, next) => {
  // res.type("application/json")
  // res.end(JSON.stringify({ name: 'coderwhy', password: 123 }))

  // 设置响应码
  res.status(204)

  // 设置内容 以json格式返回
  res.json({ name: 'coderwhy', password: 123 })
})

app.listen(8000, () => {
  console.log("params参数解析服务器启动成功~");
})