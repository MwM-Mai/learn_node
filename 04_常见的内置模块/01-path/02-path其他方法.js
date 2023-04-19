const path = require("path")

// 1. 获取路径的信息
const filename = "User/why/abc.txt"

// 文件路径
console.log(path.dirname(filename));

// 获取最终的文件
console.log(path.basename(filename));

// 获取文件后缀名
console.log(path.extname(filename));

const basePath = "/User/why"
const filename2 = "abc.txt"
const othername = "/aa.js"

// 2. join 路径拼接
const filepath = path.join(basePath, filename2)

console.log(filepath);

// 3. resolve 路径拼接
// resolve会判断拼接的路径字符串中， 是否有以/或./或../开头的路径 如果有 直接以/为路径开头 
const filepath2 = path.resolve(basePath, filename2)

console.log(filepath2);

const filepath3 = path.resolve(basePath, othername)

console.log("filenam3", filepath3);
