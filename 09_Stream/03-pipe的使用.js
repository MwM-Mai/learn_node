const fs = require("fs")


// 传统写法
fs.readFile('./foo.txt', (err, data) => {
  fs.writeFile("./bar.txt", data, (err) => {
    console.log(err);
  })
})

// Stream 写法
const reader = fs.createReadStream("./foo.txt")

const writer = fs.createWriteStream("./foz.txt")

// 直接将foo 文件内容 写入到 foz 文件里面
reader.pipe(writer)

writer.close()