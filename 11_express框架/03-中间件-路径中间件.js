const express = require("express")

const app = express()

// 路径匹配中间件
// app.use(path, callback)

app.use(() => {
  console.log("Common Middleware 01");
})

app.use("/home", (req, res, next) => {
  console.log("home middleware 01");
  // res.end("Home Middleware")
  next()
})

app.use("/home", (req, res, next) => {
  console.log("home middleware 01");
  // res.end("Home Middleware")
})

app.listen(8000, () => {
  console.log("express路径中间件启动成功~");
})  