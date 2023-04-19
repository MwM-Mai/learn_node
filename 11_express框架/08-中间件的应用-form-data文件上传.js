// 使用第三方库 解析 form-data  multer
// 1.导入multer
const multer = require("multer")
const path = require("path")

const express = require("express")
const app = express()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload/")
  }, // 上传的路径
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)) // 第二个参数为文件名 Date.now() 当前时间戳 path.extname() 获取文件后缀名
  },  //文件名称 

})

// 2. 调用 multer 函数
const upload = multer({
  // dest: "./upload/", // 图片上传保存路径  
  storage  //自定义存储文件 包括文件后缀名 没有定义一个storage
})

app.post("/upload", upload.single('file'), (req, res, next) => {
  console.log(req.file);
  res.end("文件上传成功")
})


app.listen(8000, () => {
  console.log("08-form-data解析服务器启动成功~");
})