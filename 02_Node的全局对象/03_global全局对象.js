console.log(global);

var name = "coderwhy"
console.log(name);
// node 环境下 global 类似 windows 但是定义的全局变量不会放到 global 下
// 在node 中 每个文件都是一个独立的模块 所以name 不会放到 global
console.log(global.name);