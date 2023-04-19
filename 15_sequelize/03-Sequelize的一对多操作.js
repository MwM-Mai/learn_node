const { Sequelize, DataTypes, Model, Op } = require("sequelize")

const sequelize = new Sequelize('coderhub', 'root', 'Ming0107..', {
  host: "localhost",
  dialect: "mysql"
})

sequelize.authenticate().then(() => {
  console.log("连接成功~");
})

class Brand extends Model { }
Brand.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false, // 是否为空
  },
  website: DataTypes.STRING,
  phoneRank: DataTypes.INTEGER
}, {
  tableName: "brand",
  createdAt: false,
  updatedAt: false,
  sequelize
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
  score: DataTypes.DOUBLE,
  brandId: {
    field: "brand_id",
    type: DataTypes.INTEGER,
    references: {  // 外键约束
      model: Brand,
      key: "id"
    }
  }
}, {
  tableName: 'products',
  createdAt: false, // 创建时间 是否 添加创建时间字段
  updatedAt: false, // 更新时间 是否 添加更新时间字段
  sequelize  // 与数据库联动
})

// 将两张表联系在一起
Product.belongsTo(Brand, {
  foreignKey: "brand_id"
})


// 对数据库的操作
async function queryProducts() {
  // 3. 更新数据
  const result = await Product.findAll({
    include: {
      model: Brand
    }
  })
  console.log(result);
}

queryProducts()