const Koa = require("koa")
const axios = require("axios")

const app = new Koa()

const middleware1 = async (ctx, next) => {
  ctx.message = 'aaa'
  await next(); // 和 express的区别 在于源码 next() 的实现 koa next() 返回的是一个Promise 而 express next() 是调用一个普通同步的函数
  ctx.body = ctx.message
}

const middleware2 = async (ctx, next) => {
  ctx.message += 'bbb'
  await next()
}

const middleware3 = async (ctx, next) => {
  const result = await axios.get("http://v.juhe.cn/toutiao/index?type=top&key=69759b89f6e98d7d0e8d44af5271b147")
  ctx.message += result.data.result.data[0].title
  // ctx.body = JSON.parse(result)
}

app.use(middleware1)
app.use(middleware2)
app.use(middleware3)

app.listen(8000, () => {
  console.log("服务器启动成功~");
})