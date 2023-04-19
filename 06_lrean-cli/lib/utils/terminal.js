/**
 * 执行终端命令相关的代码
 */

const { exec, spawn } = require("child_prodess")

const commandSpawn = (...args) => {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(...args)

    // 打印信息 放到当前进程里面
    childProcess.stdout.pipe(process.stdout)
    childProcess.stderr.pipe(process.stderr)

    // 监听是否执行完毕
    childProcess.on("close", () => {
      resolve()
    })
  })
}

module.exports = {
  commandSpawn
}