const EventEmitter = require("events")

// 1. 创建发射器
const emitter = new EventEmitter()

// 2. 监听某个事件
// on
// addListener是on的alias简写

emitter.on("click", (...args) => {
  console.log("监听到click事件", args);
})

const listener2 = (...args) => {
  console.log("监听到click2事件", args);
}

// 只执行一次
emitter.once("click", listener2)

// 将本次监听放到最前面
emitter.prependListener("click", (...args) => {
  console.log("监听到click3事件", args);
})

emitter.on("scroll", (...args) => {
  console.log("监听到scroll事件", args);
})

// 3. 发射事件
emitter.removeAllListeners(["scroll"])  // 移除所有事件 可以传入一个数组
emitter.emit("click", "coderwhy", "james", "kobe")
emitter.emit("click", "coderwhy", "james", "kobe")
emitter.emit("scroll", "coderwhy", "james", "kobe")
