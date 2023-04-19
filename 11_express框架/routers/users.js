/**
 * 举例子
 *  请求所有用户信息： get /users
 *  请求所有的某个用户信息 get /users/:id
 *  请求增加某个用户信息 post /user  body {name, password}
 *  删除某个用户信息 delete /users/:id
 *  修改某个用户信息 patch /users/:id
 * 
 */

const express = require("express")

const router = express.Router()

router.get("/", (req, res, next) => {
  res.json(['why', 'pink', 'lilei'])
})

router.post("/", (req, res, next) => {
  res.json("create user success~")
})

router.get("/:id", (req, res, next) => {
  res.json(`${req.params.id}用户的信息~`)
})

module.exports = router 