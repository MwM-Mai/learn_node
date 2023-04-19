# 查看所有的表
SHOW TABLES;

# 新建表 `` 防止键名与关键字冲突
CREATE TABLE IF NOT EXISTS `students` (
	`name` VARCHAR(10),
	`age` int,
	`score` int
)

# 删除表
DROP TABLE IF EXISTS `moment`; 

# 查看表的结构
DESC students;
SHOW CREATE TABLE `students`;

# 完整的创建表的语法
CREATE TABLE IF NOT EXISTS `user`(
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT, /**AUTO_INCREMENT(递增) PRIMARY KEY(主键) */
	`name` VARCHAR(20) NOT NULL,
	`age` INT DEFAULT 0,
	`phoneNum` VARCHAR(20) UNIQUE DEFAULT '', /** 唯一值(表里面只能出现一次) */
	`createTime` TIMESTAMP /** TIMESTAMP(时间类型 时间戳) */
);

# 修改表
# 1. 修改表名
ALTER TABLE `users` RENAME TO `user`; # RENAME TO(重命名)
# 2. 添加一个新的列
ALTER TABLE `user` ADD `updateTime` TIMESTAMP;
# 3. 修改字段名称
ALTER TABLE `user` CHANGE `phoneNum` `telPhone` VARCHAR(20);
# 4. 修改字段类型
ALTER TABLE `user` MODIFY `name` VARCHAR(30);
# 5. 删除某一个字段
ALTER TABLE `user` DROP `age`;


# 补充
# 根据表结构去创建另外一张表
CREATE TABLE `user1` LIKE `user`; 
# 根据另外一个表中所有内容，创建一个新的表
CREATE TABLE `user3` (SELECT * FROM `user`);