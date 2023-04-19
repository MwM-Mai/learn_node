// 实现设置token 对称加密(密钥)

const Koa = require("koa")
const Router = require("koa-router")

const jwt = require("jsonwebtoken")

const app = new Koa()
const textRouter = new Router()

// 设置密钥 常量 看格式需求
const SECRET_KEY = "abccba123"

// 登录
textRouter.post("/text", (ctx, next) => {
  // 输入了正确的账号密码 
  const user = { id: 1, name: "coderwhy" }

  // 颁发签名
  const token = jwt.sign(user, SECRET_KEY, {
    expiresIn: 60 * 60 * 24  // 过期时间 秒
  })

  ctx.body = token
})

// 验证
textRouter.get("/demo", (ctx, next) => {

  // ctx.headers.authorization 字符串包含了 "Bearer " 送信人
  const token = ctx.headers.authorization.replace("Bearer ", "")

  // 验证 token 如果过期会抛出异常 所以得捕获异常
  try {
    const result = jwt.verify(token, SECRET_KEY)
    ctx.body = result
  } catch (error) {
    console.log(error);
    ctx.body = "token是无效的"
  }

})

app.use(textRouter.routes())
app.use(textRouter.allowedMethods())

app.listen(8000, () => {
  console.log("服务器启动成功");
})