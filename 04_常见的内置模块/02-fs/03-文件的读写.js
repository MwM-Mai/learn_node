const fs = require("fs")

const content = "你好啊，李银河"

// 文件写入
// { flag: "a" } 第三个参数 option 可选参数 。可以不填第三个参数
// fs.writeFile("./abc.txt", content, err => {
//   console.log(err);
// })

// fs.writeFile("./abc.txt", content, { flag: "a" }, err => {
//   console.log(err);
// })

// 文件读取
fs.readFile("./abc.txt", { encoding: "utf-8" }, (err, data) => {
  console.log(data);
})