// 服务器设置session

const Koa = require("koa")
const Router = require("koa-router")
const koaSession = require("koa-session")

const app = new Koa()

const textRouter = new Router()

// 创建 session 配置
const session = koaSession({
  key: "sessionid",
  maxAge: 50 * 1000,
  signed: true // 是否给签名 防止客户端修改 cookie 绕开登录验证
}, app)
app.keys = ['123'] // 签名 [] 

app.use(session)

// 假设登录接口
textRouter.get("/text", (ctx, next) => {
  // 登录之后从数据库查询 id name
  const id = 110
  const name = "coderwhy"

  ctx.session = { id, name }

  ctx.body = "text"
})

textRouter.get("/demo", (ctx, next) => {

  console.log(ctx.session);

  ctx.body = "value"
})

app.use(textRouter.routes())
app.use(textRouter.allowedMethods())

app.listen(8000, () => {
  console.log("服务器启动成功");
})