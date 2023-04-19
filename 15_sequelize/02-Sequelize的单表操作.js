const { Sequelize, DataTypes, Model, Op } = require("sequelize")



const sequelize = new Sequelize('coderhub', 'root', 'Ming0107..', {
  host: "localhost",
  dialect: "mysql"
})

sequelize.authenticate().then(() => {
  console.log("连接成功~");
})


class Product extends Model { }

// 对 products 表进行映射初始化(显示哪些字段)
Product.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(20),
    allowNull: false  // 是否为空
  },
  price: DataTypes.DOUBLE,
  score: DataTypes.DOUBLE
}, {
  tableName: 'products',
  createdAt: false, // 创建时间 是否 添加创建时间字段
  updatedAt: false, // 更新时间 是否 添加更新时间字段
  sequelize  // 与数据库联动
})

// 对数据库的操作
async function queryProducts() {
  // 1. 查询数据库中produtcs表中所有的内容
  // const result = await Product.findAll({
  //   where: {
  //     price: {
  //       [Op.gte]: 5000  // gte: >=; gt: >; lt: <; lte: <= 
  //     }
  //   }
  // })
  // console.log(result);

  // 2. 插入数据
  // const result = await Product.create({
  //   title: "三星Nova",
  //   price: 8888,
  //   score: 5.5
  // })
  // console.log(result);

  // 3. 更新数据
  const result = await Product.update({
    price: 3688,
  }, {
    where: {
      id: 1
    }
  }
  )
  console.log(result);
}

queryProducts()