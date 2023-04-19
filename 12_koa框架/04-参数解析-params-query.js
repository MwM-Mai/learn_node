const Koa = require("koa")
const Router = require("koa-router")

const app = new Koa()

const userRouter = new Router({ prefix: "/users" })

userRouter.get("/:id", (ctx, next) => {
  console.log(ctx.request.params);
  console.log(ctx.request.query);
  ctx.response.body = "user list~"
})

app.use(userRouter.routes())

app.listen(8000, () => {
  console.log("Koa路由服务器启动成功~");
})