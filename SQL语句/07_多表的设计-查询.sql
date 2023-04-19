# 获取到的是笛卡尔乘积
SELECT * FROM `products`, `brand`; # 获取到的结果是 x * y (108 * 6)条数据
# 获取到的是笛卡尔乘积进行筛选
SELECT * FROM `products`, `brand` WHERE products.brand_id = brand.id;

# 2. 左连接
# 2.1 查询所有的手机以及品牌信息 LEFT JOIN 以左边的表为主 既 products(都显示出来) ON 为连接条件
SELECT * FROM `products` LEFT JOIN `brand` ON products.brand_id = brand.id;

# 2.2 查询没有对应品牌数据的手机
SELECT * FROM `products` LEFT JOIN `brand` ON products.brand_id = brand.id WHERE brand.id IS NULL;


# 2. 右连接
# 2.1 查询所有的品牌信息以及手机数据 LEFT JOIN 以右边的表为主 既 brand(都显示出来) ON 为连接条件
SELECT * FROM `products` RIGHT JOIN `brand` ON products.brand_id = brand.id;

# 2.2 查询没有对应手机数据的品牌数据
SELECT * FROM `products` RIGHT JOIN `brand` ON products.brand_id = brand.id WHERE products.brand_id IS NULL;

# 3. 内连接
SELECT * FROM `products` JOIN `brand` ON products.brand_id = brand.id;
SELECT * FROM `products` JOIN `brand` ON products.brand_id = brand.id WHERE price = 8699;

# 4. 全连接
--  Mysql 是不支持 PULL OUTER JOIN
SELECT * FROM `products` PULL OUTER JOIN `brand` ON products.brand_id = brand.id; # 报错

# 解决方法 左连接和右连接进行联合 UNION
(SELECT * FROM `products` LEFT JOIN `brand` ON products.brand_id = brand.id)
	UNION 
(SELECT * FROM `products` RIGHT JOIN `brand` ON products.brand_id = brand.id);

(SELECT * FROM `products` LEFT JOIN `brand` ON products.brand_id = brand.id WHERE brand.id IS NULL)
	UNION 
(SELECT * FROM `products` RIGHT JOIN `brand` ON products.brand_id = brand.id WHERE products.brand_id IS NULL);

