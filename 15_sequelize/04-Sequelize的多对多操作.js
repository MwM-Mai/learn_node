const { Sequelize, DataTypes, Model, Op } = require("sequelize")

const sequelize = new Sequelize('coderhub', 'root', 'Ming0107..', {
  host: "localhost",
  dialect: "mysql"
})

// Student
class Student extends Model { }
Student.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: DataTypes.INTEGER,
}, {
  tableName: "students",
  createdAt: false,
  updatedAt: false,
  sequelize
})

// Courses
class Courses extends Model { }
Courses.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: DataTypes.DOUBLE,
}, {
  tableName: "courses",
  createdAt: false,
  updatedAt: false,
  sequelize
})

// StudentSelectCourse
class StudentSelectCourse extends Model { }
StudentSelectCourse.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  studentId: {
    field: "student_id",
    type: DataTypes.STRING,
    references: {
      model: Student,
      key: "id"
    }
  },
  courseId: {
    field: "course_id",
    type: DataTypes.STRING,
    references: {
      model: Courses,
      key: "id"
    }
  },
}, {
  tableName: "students_select_courses",
  createdAt: false,
  updatedAt: false,
  sequelize
})

//  多对多关系的联系
Student.belongsToMany(Courses, {
  through: StudentSelectCourse,
  foreignKey: "student_id",
  otherKey: "course_id"
})

Courses.belongsToMany(Student, {
  through: StudentSelectCourse,
  foreignKey: "course_id",
  otherKey: "student_id"
})

// 对数据库的操作
async function queryProducts() {
  const result = await Student.findAll({
    include: {
      model: Courses
    }
  })
  console.log(result);
}

queryProducts()