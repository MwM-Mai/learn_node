const message = "Hello World"

// 1. 创建 Buffer

// 创建方式一 不推荐
// const buffer = new Buffer(message)

// console.log(buffer);

// 创建方式二
const buffer = Buffer.from(message)
console.log(buffer);