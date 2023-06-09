const Koa = require("koa")

const app = new Koa()

app.use((ctx, next) => {
  const isLogin = false
  if (!isLogin) {
    ctx.app.emit("error", new Error("您还没有登录~"), ctx)
  }
})

app.on("error", (err, ctx) => {
  ctx.status = 401
  ctx.body = err.message
})

app.listen(8000, () => {
  console.log("Koa响应内容服务器启动成功~");
})