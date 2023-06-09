const Koa = require("koa")

const app = new Koa()

// 注册中间件
app.use((ctx, next) => {
  if (ctx.request.url === "/login") {
    if (ctx.request.method === "GET") {
      ctx.response.body = "Login Success~"
    }
  } else {
    ctx.response.body = "Other Request~"
  }
})

// 注册中间件没有提高method的方式进行注册中间件 没有提供一下的注册方式
// methods方式： app.get()/.post
// path方式: app.use("/login", (ctx, next) => {})
// 连续注册： app.use((ctx, next) => {}, (ctx, next) => {})

app.listen(8000, () => {
  console.log("koa注册中间件服务器启动成功~");
})