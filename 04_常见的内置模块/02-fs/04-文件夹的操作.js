const fs = require("fs")
const path = require("path")

// 1. 创建文件夹
let dirname = "./why"

// 判断文件夹存不存在
if (!fs.existsSync(dirname)) {
  fs.mkdir(dirname, err => {
    console.log(err);
  })
}

// 2. 读取文件夹中所以的文件
// fs.readdir(dirname, (err, files) => {
//   console.log(files);
// })

// 如果文件嵌套文件的话 可以递归调用, 但是有点麻烦
// function getFiles(dirname) {
//   fs.readdir(dirname, (err, files) => {
//     console.log(files);
//     files.forEach(file => {
//       console.log(file);
//       fs.stat(path.resolve(dirname, file), (err, info) => {
//         // console.log("info", info);
//         if (info.isDirectory()) {
//           dirname = path.resolve(dirname, file)
//           getFiles(dirname)
//         }
//       })
//     })
//   })
// }
getFiles(dirname)

// 如果文件嵌套文件 可以 设置 option
function getFiles(dirname) {
  fs.readdir(dirname, { withFileTypes: true }, (err, files) => {
    files.forEach(file => {
      if (file.isDirectory()) {
        dirname = path.resolve(dirname, file.name)
        getFiles(dirname)
      } else {
        console.log(file.name);
      }
    })
  })
}

// 3. 文件夹重命名