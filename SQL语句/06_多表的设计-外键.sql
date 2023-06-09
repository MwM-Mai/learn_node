# 1. 创建表和插入数据
CREATE TABLE IF NOT EXISTS `brand` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(20) NOT NULL,
	`website` VARCHAR(100),
	`phoneRank` INT
);

ALTER TABLE `brand` CHANGE `phonePank` `phoneRank` VARCHAR(100);

# 插入数据
INSERT INTO `brand` (`name`, `website`, `phoneRank`) VALUES ("华为", "www.huawei.com", 2);
INSERT INTO `brand` (`name`, `website`, `phoneRank`) VALUES ("苹果", "www.apple.com", 10);
INSERT INTO `brand` (`name`, `website`, `phoneRank`) VALUES ("小米", "www.mi.com", 5);
INSERT INTO `brand` (`name`, `website`, `phoneRank`) VALUES ("oppo", "www.opppo.com", 12);
INSERT INTO `brand` (`name`, `website`, `phoneRank`) VALUES ("京东", "www.jd.com", 8);
INSERT INTO `brand` (`name`, `website`, `phoneRank`) VALUES ("Google", "www.Google.com", 9);

# 2. 将brand_id 设置引用的brand的id的外键约束
# 添加一个brand_id字段
ALTER TABLE `products` ADD `brand_id` INT;
-- ALTER TABLE `products` DROP `brand_id`;

# 修改bran_id为外键约束 FOREIGN KEY 要约束的字段 REFERENCES 其他表的字段 
ALTER TABLE `products` ADD FOREIGN KEY(brand_id) REFERENCES brand(id);

# 设置brand_id的值
UPDATE `products` SET `brand_id` = 1 WHERE `brand` = "华为";
UPDATE `products` SET `brand_id` = 2 WHERE `brand` = "苹果";
UPDATE `products` SET `brand_id` = 3 WHERE `brand` = "小米";




# 3. 修改和删除外键约束引用的id
UPDATE `brand` SET id = 100 WHERE id = 1; # 报错 因为被 products.brand_id 外键引用 必须要把 on delete on update 属性修改才行

# 4. 修改 brand_id 关联外键时的 action(on delete, on update)
# 4.1	获取到目前的外键的名称
SHOW CREATE TABLE `products`;

CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand` varchar(20) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `price` double NOT NULL,
  `score` decimal(2,1) DEFAULT NULL,
  `voteCnt` int DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `pid` int DEFAULT NULL,
  `brand_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `brand_id` (`brand_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
	
# 4.2 根据名称将外键删除
ALTER TABLE `products` DROP FOREIGN KEY `products_ibfk_1`;

# 4.3 重新添加外键约束
ALTER TABLE `products` ADD FOREIGN KEY(brand_id) REFERENCES brand(id) 
																								 ON UPDATE CASCADE # 更新时联动 既brand(id)更新 products的外键随着更新
																								 ON DELETE RESTRICT # 如果删除联动 会对数据进行删除 非常危险 所有用默认值
 