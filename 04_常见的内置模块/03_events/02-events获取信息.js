const EventEmitter = require("events")

// 1. 创建发射器
const emitter = new EventEmitter()

// 2. 监听某个事件
// on
// addListener是on的alias简写

const listener = (args) => {
  console.log("监听到click事件", args);
}

emitter.on("click", listener)

const listener2 = (args) => {
  console.log("监听到click2事件", args);
}

emitter.on("click", listener2)

emitter.on("tap", (args) => {
  console.log(args);
})


// 3. 发射事件
emitter.emit("click", "coderwhy", "james", "kobe")
emitter.off("click", listener2)
emitter.emit("click", "coderwhy", "james", "kobe")


// 4. 获取注册的事件
console.log(emitter.eventNames());
console.log(emitter.listenerCount("click"));
console.log(emitter.listeners("click"));