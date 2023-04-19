// 1. 安装并导入 koa-bodyparser 库 可以解析 json urlencoded
const bodyParser = require("koa-bodyparser")
// 1. 安装并导入 koa-multer 库 可以解析 form-data
const multer = require("koa-multer")

const Koa = require("koa")

const app = new Koa()

const upload = multer()

// 2. 在中间件中调用
app.use(bodyParser())
app.use(upload.any())

app.use((ctx, next) => {
  console.log(ctx.req.body);  // ctx.req 等同于 http.request 对象 koa-multer 解析后存储到 ctx.req 里面
  console.log(ctx.request.body); // 返回空的对象，ctx.request是koa自定义对象
  ctx.response.body = "Hello World"
})

app.listen(8000, () => {
  console.log("koa初体验服务器启动成功~");
})