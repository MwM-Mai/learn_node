#!/usr/bin/env node
// 上面的shebang指令表示为 在当前电脑下找 node 可执行文件

// 安装 commander
const program = require("commander")

const helpOptions = require("./lib/core/help.js")
const createCommands = require("./lib/core/create")

// 查看版本
program.version(require("./package.json").version, "-v, --version")

// 帮助和可选信息
helpOptions()

// 创建其他指令
createCommands()

program.parse(process.argv)



