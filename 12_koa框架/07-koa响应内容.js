const Koa = require("koa")

const app = new Koa()

app.use((ctx, next) => {
  // ctx.response.body = {
  //   name: "coderwhy",
  //   age: 18
  // }
  ctx.body = {
    name: "coderwhy",
    age: 18
  }

  // 设置状态码
  ctx.status = 204
})

app.listen(8000, () => {
  console.log("Koa响应内容服务器启动成功~");
})