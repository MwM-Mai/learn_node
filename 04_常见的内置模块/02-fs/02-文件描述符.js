const fs = require("fs")

// fd 文件描述符
fs.open("./abc.txt", (err, fd) => {
  if (err) {
    console.log(err);
    return
  }

  // 通过描述符获取文件信息
  fs.fstat(fd, (err, info) => {
    console.log(info);
  })
})