const Koa = require("koa") // 类

const app = new Koa()

app.use((ctx, next) => {
  console.log("中间件被执行~");
  ctx.response.body = "Hello World"
})

app.listen(8000, () => {
  console.log("koa初体验服务器启动成功~");
})