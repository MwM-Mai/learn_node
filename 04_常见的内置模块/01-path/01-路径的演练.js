const basePath = "/User/why"
const filename = "abc.txt"

const path = require("path")

const filepath = path.resolve(basePath, filename)
console.log(filepath);