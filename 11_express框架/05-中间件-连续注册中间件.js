const express = require("express")

const app = express()

// 连续注册中间件
app.use((req, res, next) => {
  console.log("common middleware 01");
  netx()
})

app.get("/home", (req, res, next) => {
  console.log("home path and method middleware 01");
}, (req, res, next) => {
  console.log("home path and method middleware 02");
}, (req, res, next) => {
  console.log("home path and method middleware 03");
}, (req, res, next) => {
  console.log("home path and method middleware 04");
})

app.listen(8000, () => {
  console.log("连续注册中间件启动成功~");
})