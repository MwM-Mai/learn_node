// commonJs 的导入 是引用方式
// Node 中实现CommonJs的本质就是对象的引用赋值
// require 导入的就是 module.exports
const bar = require("./bar")

console.log(bar.name);
console.log(bar.age);


// 导入没加后缀名 的查找 X文件 方式: 文件X ->> .js ->> .json ->> .node
// 导入没加后缀名 的查找 X目录 方式: index.js ->> index.json ->> index.node