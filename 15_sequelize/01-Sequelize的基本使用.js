// ORM 的使用
const { Sequelize } = require("sequelize")

// 1. 创建 Sequelize 对象 Sequelize("数据库", "用户", "密码", options)
const sequelize = new Sequelize("coderhub", "root", "Ming0107..", {
  host: "localhost",
  dialect: "mysql", // 数据库类型
})

//  2. 测试连接
sequelize.authenticate().then(() => {
  console.log("连接数据库成功~");
}).catch(err => {
  console.log("连接数据库失败~", err)
})