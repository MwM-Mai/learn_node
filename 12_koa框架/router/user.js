// 1.安装并导入 koa-router
const Router = require("koa-router")

const router = new Router({ prefix: '/users' })

router.get('/', (ctx, next) => {
  ctx.response.body = "Users List~"
})

module.exports = router

