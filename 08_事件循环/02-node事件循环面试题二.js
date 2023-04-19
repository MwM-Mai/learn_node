// 面试题二

// setTimeout() 函数虽然是0秒执行但是需要 插入到红黑树某个节点上 在从红黑树插入到Timers队列中 这个过程需要时间 有可能是 10ms 15ms
setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});

// 问题 setTimeout setImmediate 谁先执行

// 在 main script 代码执行之后会 初始化事件循环 这个过程也需要时间
// 当初始化时间大于 setTimeout 插入时间时 第一次tick时 setTimeout  setImmediate
// 当初始化时间小于 setTimeout 插入时间时 第一次tick setImmediate 第二次tick  setTimeout

// 可能是setTimeout  setImmediate
// 也可能是setImmediate  setTimeout