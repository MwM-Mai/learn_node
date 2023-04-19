# 查询所有数据库
SHOW DATABASES;

# 选择某一个数据
USE coderhub;

# 查看当前正在使用的数据库
SELECT DATABASE();

# 创建新的数据库 IF NOT EXISTS(如果数据库不存在则创建)
CREATE DATABASE IF NOT EXISTS douyu;
# 创建新的数据库 设置默认编码 DEFAULT CHARACTER SET
CREATE DATABASE IF NOT EXISTS huya DEFAULT CHARACTER SET utf8mb4
	COLLATE utf8mb4_0900_ai_ci; # COLLATE 指定排序规则 ai(不区分重音) ci(不区分大小写)

# 删除数据库 IF EXISTS(存在则删除)
DROP DATABASE IF EXISTS douyu; 

# 修改数据库的编码 CHARACTER(字符)
ALTER DATABASE huya CHARACTER SET = utf8
	COLLATE = utf8_unicode_ci;