// 服务器设置cookie

const Koa = require("koa")
const Router = require("koa-router")

const app = new Koa()

const textRouter = new Router()

// 假设登录接口
textRouter.get("/text", (ctx, next) => {

  // 设置cookies
  ctx.cookies.set("name", "lilei", {
    maxAge: 50 * 1000 // 毫秒
  })

  ctx.body = "text"
})

textRouter.get("/demo", (ctx, next) => {

  const value = ctx.cookies.get("name")

  ctx.body = value
})

app.use(textRouter.routes())
app.use(textRouter.allowedMethods())

app.listen(8000, () => {
  console.log("服务器启动成功");
})