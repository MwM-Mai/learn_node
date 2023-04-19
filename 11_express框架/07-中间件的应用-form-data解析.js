// 使用第三方库 解析 form-data  multer
// 1.导入multer
const multer = require("multer")

const express = require("express")

const app = express()

// 2. 调用 multer 函数
const upload = multer()

app.use(upload.any()) // 不建议全局使用 推荐使用在连续注册中间件使用 如 app.use("/login", upload.any(), (req, res, next) => {})

app.post("/login", (req, res, next) => {
  console.log(req.body);
  res.end("用户登录成功")
})


app.listen(8000, () => {
  console.log("form-data解析服务器启动成功~");
})