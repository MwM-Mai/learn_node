# 1. 聚合函数的使用
# 1.1 求所有手机价格的总和
SELECT SUM(`price`) AS `totalPrice` FROM `products`;
# 求华为手机价格的总和 
SELECT SUM(`price`) AS `totalPrice` FROM `products` WHERE `brand` = "华为";
# 求华为手机的平均价格
SELECT AVG(`price`) FROM `products` WHERE `brand` = "华为";
# 最高的手机价格和最低的手机价格
SELECT MAX(`price`) FROM `products`;
SELECT MIN(`price`) FROM `products`;

# 求华为手机的个数
SELECT COUNT(*) FROM `products` WHERE `brand` = "华为";
SELECT COUNT(*) FROM `products` WHERE `brand` = "苹果";
SELECT COUNT(`url`) FROM `products` WHERE `brand` = "苹果";

SELECT COUNT(*) FROM `products`;
SELECT COUNT(DISTINCT `price`) FROM `products`; # DISTINCT 出现重复的价格只计算一次


# 2. GROUP BY 的使用(用于对表进行分组)
SELECT `brand`, AVG(`price`), COUNT(`price`), AVG(`score`) FROM `products` GROUP BY `brand`;
 
# HAVING 的使用 对分组之后的结果 再进行筛选 
SELECT `brand`, AVG(`price`) `avgPrice`, COUNT(`price`), AVG(`score`) FROM `products` 
	GROUP BY `brand` HAVING `avgPrice` > 2000;

# 4. 需求：求score > 7.5 的手机的平均价格是多少
# 升级: 再按照品牌进行分类
SELECT `brand`, AVG(`price`) `avgPrice` FROM `products` WHERE `score` > 7.5 GROUP BY `brand`;
