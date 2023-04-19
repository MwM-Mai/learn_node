const http = require("http")

// http发起 get 请求

// http.get("http://localhost:8888", (res) => {
//   res.setEncoding("utf-8")
//   res.on("data", (data) => {
//     console.log(data);
//   })

//   res.on("end", () => {
//     console.log("获取到所有的结果");
//   })
// })

// http发起 post 请求

const req = http.request({
  method: "POST",
  hostname: "localhost",
  port: "8888",
}, (res) => {
  res.setEncoding("utf-8")
  res.on("data", (data) => {
    console.log(data);
  })

  res.on("end", () => {
    console.log("获取到所有的结果");
  })
})

req.end()