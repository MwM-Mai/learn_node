const program = require("commander")

const helpOptions = () => {
  program.option("-w --why", "a why cli")
  program.option("-d --dest <dest>", "a destnation folder, 例如: -d /src/compnents")
  program.option("-f --framework <framewock>", "your framewock")

  program.on("--help", function () {
    console.log("");
    console.log("Other");
    console.log("Other options ~");
  })
}

module.exports = helpOptions