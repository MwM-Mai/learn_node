const express = require("express")

const app = express()

app.use(express.static('./dist'))

app.listen(8000, () => {
  console.log("路由服务器启动成功~");
})