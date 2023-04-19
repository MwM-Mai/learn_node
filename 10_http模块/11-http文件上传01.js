const http = require("http")

const serve = http.createServer((req, res) => {

})

serve.listen(8000, () => {
  console.log("文件上传服务器开启成功~");
})