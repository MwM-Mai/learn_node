const fs = require("fs")

const express = require("express")
// 1. 安装第三方库 morgan 导入
const morgan = require("morgan")

const app = express()

const writerStream = fs.createWriteStream("./logs/access.log", {
  flags: "a+"
})

app.use(morgan("combined", { stream: writerStream }))

app.get("/home", (req, res, next) => {
  res.end("Hello World")
})

app.listen(8000, () => {
  console.log("保存日志信息服务器启动成功~");
})