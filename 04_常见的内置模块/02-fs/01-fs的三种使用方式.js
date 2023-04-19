const fs = require("fs");

const filePath = "./abc.txt"

// fs案例: 读取文件信息

// 1. 方式一: 同步操作
const info = fs.statSync(filePath)
console.log("后续需要执行的代码会被阻塞");
console.log(info);

console.log("----------------");

// 2. 方式二: 异步操作 嵌套回调函数 容易出现回调地狱
fs.stat(filePath, (err, info) => {
  if (err) {
    console.log(err);
    return
  }

  console.log(info);
  // 是否问文件
  console.log(info.isFile());
  // 是否为文件夹
  console.log(info.isDirectory());
})
console.log("后续需要执行的代码不会被阻塞");

// 3. 方式三: Promise
fs.promises.stat(filePath).then(info => {
  console.log(info);
}).catch(err => {
  console.log(err);
})
console.log("后续需要执行的代码不会被阻塞");
console.log("-------------------------------");