const { json } = require("express")
const express = require("express")

const app = express()

// app.use((req, res, next) => {
//   if (req.headers["content-type"] === "application/json") {
//     req.setEncoding("utf-8")
//     req.on("data", (data) => {
//       // console.log(data);
//       const info = JSON.parse(data)
//       // 传递参数
//       req.body = info
//       // Object.assign() 拷贝
//     })
//   }

//   req.on("end", () => {
//     next()
//   })
// })

// body-parser 工具库已经对中间件进行处理， 所有不用手写
// v3 内置express 框架中
// v4 被分离出去
// v4.16.x 被内置为函数

app.use(express.json())


app.post("/login", (req, res, next) => {

  // 接收参数
  console.log(req.body);

  res.end("Coderwhy, Welcome Back~")
})

app.post("/products", (req, res, next) => {

  // 接收参数
  console.log(req.body);

  res.end("Upload Products Info Success~")
})


app.listen(8000, () => {
  console.log("连续注册中间件启动成功~");
})