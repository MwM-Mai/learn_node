const { promisify } = require("util")
const path = require("path")

const download = promisify(require("download-git-repo"))
const open = require("open")

const { vueRepo } = require("../config/repo-config")
const { commandSpawn } = require("../utils/terminal")
const { compile, writeToFile, createDirSync } = require("../utils/utils")

// callback -> promisify(函数) -> Promise -> async await
// 创建项目的 action
const createProjectAction = async (project) => {
  console.log("why helps you create your project");
  // 1. clone 项目
  await download(vueRepo, project, { clone: ture });

  // 判断 平台是否为 windows 系统
  const command = process.platform == "win32" ? "npm.cmd" : "npm"

  // 2. 执行 npm install
  await commandSpawn(command, ["install"], { cwd: `./${project}` })

  // 3. 运行 npm run serve
  commandSpawn(command, ["run", "serve"], { cwd: `./${project}` })

  // 4. 打开浏览器
  open("http://localhost:8080/")
}

// 添加组件的action
const addCpnAction = async (name, dest) => {
  // 1. 编译ejs模板 result
  const result = await compile("vue-component.ejs", { name, lowerName: name.toLowerCase() })
  // 2. 将result 写入 .vue 文件中
  const targetPath = path.resolve(dest, `${name}.vue`)
  await writeToFile(targetPath, result)
}

// 添加组件和路由
const addPagesAndRoute = async (name, dest) => {
  // 1. 编写 ejs 模板
  const pageResulet = await compile("vue-component.ejs", { name, lowerName: name.toLowerCase() })
  const routeResulet = await compile("vue-router.ejs", { name, lowerName: name.toLowerCase() })

  dest = path.resolve(dest, name.toLowerCase())
  if (createDirSync(dest)) {
    // 2. 将result 写入 .vue 文件
    const targetPagePath = path.resolve(dest, `${name}.vue`)
    const targetRoutePath = path.resolve(dest, `router  .js`)
    await writeToFile(targetPagePath, pageResulet)
    await writeToFile(targetRoutePath, routeResulet)
  }
}

module.exports = {
  createProjectAction,
  addCpnAction,
  addPagesAndRoute
}