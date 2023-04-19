const message = "你好啊"

// 编解码相同
const buffer = Buffer.from(message)

console.log(buffer);

// .toString 解码
console.log(buffer.toString());

// 2. 编码使用utf16le 解码使用 utf8
const buffer2 = Buffer.from(message, "utf16le")

console.log(buffer2);

console.log(buffer2.toString());
console.log(buffer2.toString("utf16le"));