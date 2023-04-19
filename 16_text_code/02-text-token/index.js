// 实现设置token 非对称加密(公私钥)

const fs = require("fs")

const Koa = require("koa")
const Router = require("koa-router")
const jwt = require("jsonwebtoken")

const app = new Koa()
const textRouter = new Router()

// 在项目中的任何一个地方的相对路径，都是相对于process.cwd()
// 私钥
const PRIVATE_KEY = fs.readFileSync("./keys/private.key") // 返回的是Buffer
// 公钥
const PUBLIC_KEY = fs.readFileSync("./keys/public.key") // 返回的是Buffer

// 登录
textRouter.post("/text", (ctx, next) => {
  // 输入了正确的账号密码 
  const user = { id: 1, name: "coderwhy" }

  // 颁发签名
  const token = jwt.sign(user, PRIVATE_KEY, {
    expiresIn: 60 * 60 * 24,  // 过期时间 秒
    algorithm: "RS256" // 指定算法 使用非对称加密 默认是对称加密
  })

  ctx.body = token
})

// 验证
textRouter.get("/demo", (ctx, next) => {

  // ctx.headers.authorization 字符串包含了 "Bearer " 送信人
  const token = ctx.headers.authorization.replace("Bearer ", "")

  // 验证 token 如果过期会抛出异常 所以得捕获异常
  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"]
    })
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