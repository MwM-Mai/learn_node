// 就是一个模块

const name = "coderwhy"
const age = 18

let messsge = "my name is why"

function sayHello() {
  console.log(`Hello ${name}`);
}

// 没用过模块都有一个exports对象 默认为空的对象

exports.name = name
exports.age = age
exports.messsge = messsge

// 源码帮我们实现了 module.exports = exports = bar