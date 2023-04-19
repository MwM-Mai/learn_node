const program = require("commander")
const {
  createProjectAction,
  addCpnAction,
  addPagesAndRoute
} = require("./actions")

const createCommands = () => {
  program
    // 创建指令
    .command("create <project> [others...]")
    // 描述
    .description("clone repository init a folder")
    .action(createProjectAction)

  program
    // 创建指令
    .command("addcpn <name> [others...]")
    // 描述
    .description("add vue component, 例如: why addcpn HelloWorld [-d src/componnets]")
    .action((name) => {
      addCpnAction(name, program.dest || 'src/components')
    })

  program
    // 创建指令
    .command("addpage <name>")
    // 描述
    .description("add vue page and router config, 例如: why add page HrrloWorld [-d src/pages]")
    .action((page) => {
      addPagesAndRoute(page, program.dest || 'src/pages')
    })
}

module.exports = createCommands