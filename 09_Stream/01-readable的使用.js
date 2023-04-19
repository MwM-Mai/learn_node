const fs = require("fs")

// 传统的方式读取
fs.readFile("./foo.txt", { encoding: "utf-8" }, (err, data) => {
  console.log(data);
})

// 流的方式读取 可选择长度
const reader = fs.createReadStream("./foo.txt", {
  start: 3,  // 开始
  end: 10, // 结束
  highWaterMark: 2 // 每次读取大小
})

// 监听数据读取的过程
reader.on("data", (data) => {
  console.log(data);

  reader.pause() // 读取文件暂停

  setTimeout(() => {
    reader.resume()  // 恢复读取文件
  }, 1000)
})

reader.on("open", () => {
  console.log("文件被打开");
})

// 监听是否已经读取完毕
reader.on('close', () => {
  console.log("文件被关闭");
})