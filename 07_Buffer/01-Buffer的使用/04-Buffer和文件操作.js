const fs = require("fs")
const sharp = require("sharp")

// 读取文本文件
// fs.readFile("./foo.txt", { encoding: "utf-8" }, (err, data) => {
//   console.log(data);
// })

// fs.readFile("./foo.txt", (err, data) => {
//   console.log(data.toString());
// })

// 读取图片文件
// fs.readFile("../../npm install 原理.png", (err, data) => {
//   console.log(data);
//   fs.writeFile("./foo.png", data, (err) => {
//     console.log(err);
//   })
// })

// sharp库的使用
sharp('./foo.png')
  .resize(200, 200)  // 剪裁
  .toFile("./bar.png") // 写入文件

sharp("./foo.png")
  .resize(300, 300)
  .toBuffer()
  .then(data => {
    fs.writeFile('./bax.png', data, err => {
      console.log(err);
    })
  })