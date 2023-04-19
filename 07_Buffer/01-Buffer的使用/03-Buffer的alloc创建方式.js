// 通过 alloc 的方式创建 Buffer
// .alloc(size)
const buffer = Buffer.alloc(8)
console.log(buffer);

buffer[0] = 88
buffer[1] = 0x88
console.log(buffer);