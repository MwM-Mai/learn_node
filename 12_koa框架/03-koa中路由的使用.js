const Koa = require("koa")
const userRouter = require("./router/user")

const app = new Koa()

app.use(userRouter.routes())
app.use(userRouter.allowedMethods()) // userRouter.allowedMethods()允许的请求方法

app.listen(8000, () => {
  console.log("Koa路由服务器启动成功~");
})