const fs = require("fs")

// 传统的写入方式
// fs.writeFile("./foo.txt", "Hello Stream", { flag: "a+" }, (err) => {
//   console.log(err);
// })


// Stream的写入方式 
const writer = fs.createWriteStream("./foo.txt", {
  flags: "r+",
  start: 4
})

writer.write("你好啊", (err) => {
  if (err) {
    console.log(err);
    return
  }

  console.log("写入成功");
})

writer.write("李银河", (err) => {
  if (err) {
    console.log(err);
    return
  }

  console.log("第二次写入成功");
})

writer.close()

writer.on("close", () => {
  console.log("文件关闭");
})
