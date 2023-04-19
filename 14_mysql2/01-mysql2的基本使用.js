const mysql = require("mysql2")

// 1. 创建数据库连接
const connection = mysql.createConnection({
  host: "localhost", // 主机
  port: 3306, // 端口号
  database: "coderhub", // 操作的数据库
  user: "root",  //  用户名称
  password: "Ming0107.."
});



// 2. 执行sql语句
const statement = `
  SELECT * FROM products WHERE price > 6000;
`

connection.query(statement, (err, results, fields) => {
  console.log(results);
  // connection.end() // 终止运行
})