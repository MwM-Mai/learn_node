const http = require("http")

// 创建server的两种方式


// const server1 = http.createServer((req, res) => {

// })

// server1.listen(8000, () => {
//   console.log("server1启动成功");
// })

// const server2 = http.createServer((req, res) => {

// })

// server2.listen(8000, () => {
//   console.log("server2启动成功");
// })

const server1 = new http.Server((req, res) => {
  res.end("Server1")
})

const server2 = new http.Server((req, res) => {
  res.end("Server2")
})


server2.listen(8001, () => {
  console.log("server2启动成功");
})


// 2. 监听方法的使用
// 端口号可以不传 主机也可以不传
server1.listen(() => {
  console.log("server1启动成功");
  console.log(server1.address().port);
})