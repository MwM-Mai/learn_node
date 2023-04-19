# DML 数据操作语句

# 插入数据
DATE();
INSERT INTO `user` VALUES (110, 'why', '020-110', '2023-12-12', '2023-12-12');
INSERT INTO `user` (`name`, `telPhone`, `createTime`, `updateTime`)
	VALUES ('kobe', '000-1111', '2023-10-12', '2023-05-20');

INSERT INTO `user` (`name`, `telPhone`)
	VALUES ('james', '000-1112');

# 需求：createTime和updateTime可以自动设置值 CUURENT_TIMESTAMP(当前时间戳)
ALTER TABLE `user` MODIFY `createTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP; # 创建时 自动设置时间
ALTER TABLE `user` MODIFY `updateTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
																			 ON UPDATE CURRENT_TIMESTAMP; # ON UPDATE 更新时设置时间

INSERT INTO `user` (`name`, `telPhone`)
	VALUES ('lilei', '000-1113');

# 删除数据
# 删除所有数据
DELETE FROM `user`;
# 删除符合条件的数据
DELETE FROM `user` WHERE id = 110;

# 更新数据
UPDATE `user` SET `name` = 'lily', telPhone = '020-45646' WHERE id = 111;	


