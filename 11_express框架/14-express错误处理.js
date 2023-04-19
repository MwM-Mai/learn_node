const express = require("express")

const app = express()

const USERNAME_DOES_NOTE_EXISTS = "username does note exists~"
const USERNAME_ALREADY_EXISTS = "username already exists~"

app.post("/login", (req, res, next) => {
  // 加入在数据中查询用户名时，发现不存在
  const isLogin = false
  if (isLogin) {
    res.json("user login success~")
  } else {
    // res.type(400)
    // res.json("username does note exists~")
    next(new Error(USERNAME_DOES_NOTE_EXISTS))
  }
})

app.post("/register", (req, res, next) => {
  // 加入在数据中查询用户名时，发现不存在
  const isLogin = false
  if (isLogin) {
    res.json("user register success~")
  } else {
    // res.type(400)
    // res.json("username already exists~")
    next(new Error(USERNAME_ALREADY_EXISTS))
  }
})

app.use((err, req, res, next) => {
  let status = 400
  let message = ""
  switch (err.message) {
    case USERNAME_DOES_NOTE_EXISTS:
      message = USERNAME_DOES_NOTE_EXISTS
      break
    case USERNAME_ALREADY_EXISTS:
      message = USERNAME_ALREADY_EXISTS
      break
    default:
      message = "NOT FOUND~"
      break
  }
  res.status(status)
  res.json(message)

})

app.listen(8000, () => {
  console.log("express错误处理服务器启动成功~");
})