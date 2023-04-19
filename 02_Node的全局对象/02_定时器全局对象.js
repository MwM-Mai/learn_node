setTimeout(time => {
  console.log("setTimeout");
}, 1000)

setInterval(tiem => {
  console.log("setInterval");
}, 1000)

// 立即执行
setImmediate(time => {
  console.log("setImmediate");
})

process.nextTick(() => {
  console.log("process.nextTick");
})