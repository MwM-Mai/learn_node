CREATE TABLE IF NOT EXISTS `users` (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL UNIQUE,
	password VARCHAR(50) NOT NULL,
	createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS `moment` (
	id INT PRIMARY KEY AUTO_INCREMENT,
	content VARCHAR(1000) NOT NULL,
	user_id INT NOT NULL,
	createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	FOREIGN KEY (user_id) REFERENCES users(id)
);


CREATE TABLE IF NOT EXISTS `label` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(10) NOT NULL UNIQUE,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `moment_label` (
  `moment_id` int NOT NULL,
  `label_id` int NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`moment_id`,`label_id`), # 联合主键
  FOREIGN KEY (`moment_id`) REFERENCES `moment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`label_id`) REFERENCES `label`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS comment (
	id INT PRIMARY KEY AUTO_INCREMENT,
	content VARCHAR(1000) NOT NULL,
	moment_id INT NOT NULL,
	user_id INT NOT NULL,
	comment_id INT NOT NULL,
	
	FOREIGN KEY (moment_id) REFERENCES moment(id) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (comment_id) REFERENCES comment(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE `file` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `filename` varchar(100) NOT NULL UNIQUE,
  `mimetype` varchar(30) DEFAULT NULL,
  `size` int DEFAULT NULL,
  `moment_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`moment_id`) REFERENCES `moment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)

DROP TABLE IF EXISTS `avatar`;
CREATE TABLE `avatar` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `filename` varchar(255) NOT NULL UNIQUE,
  `mimetype` varchar(30) DEFAULT NULL,
  `size` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)

SELECT
	moment.id id, moment.content content, moment.createAt createTime, moment.updateAt updateTime,
	JSON_OBJECT("id", users.id, "name", users.name) AS users # JSON_OBJECT() 以 json 格式返回
FROM moment
LEFT JOIN users ON moment.user_id = users.id 
WHERE moment.id = ?;

INSERT INTO `moment` (content, user_id) VALUES ('我说错了，C语言才是最好的语言~', 4);
INSERT INTO `moment` (content, user_id) VALUES ( '曾几何时，他也好，她也好，都是这家伙的被害者。所以我才憎恶着。这个强求着所谓“大家”的世界。必须建立在牺牲某人之上才能成立的低劣的和平。以温柔和正义粉饰，明明是恶毒之物却登大雅之堂，随着时间的流逝越发凶恶，除欺瞒外别无其二的空虚的概念。过去和世界都是无法改变的。发生过的事情和所谓的“大家”都是无法改变的。但是，并不是说自己只能隶属于他们', 1);
INSERT INTO `moment` (content, user_id) VALUES ( '不要告诉我你不需要保护，不要告诉我你不寂寞，知微，我只希望你，在走过黑夜的那个时辰，不要倔强的选择一个人。', 3);
INSERT INTO `moment` (content, user_id) VALUES ('If you shed tears when you miss the sun, you also miss the stars.如果你因失去了太阳而流泪，那么你也将失去群星了。', 1);
INSERT INTO `moment` (content, user_id) VALUES ('在世间万物中我都发现了你，渺小时，你是阳光下一粒种子，伟大时，你隐身在高山海洋里。', 2);
INSERT INTO `moment` (content, user_id) VALUES ('限定目的，能使人生变得简洁。', 2);
INSERT INTO `moment` (content, user_id) VALUES ('翅膀长在你的肩上，太在乎别人对于飞行姿势的批评，所以你飞不起来', 4);
INSERT INTO `moment` (content, user_id) VALUES ('一个人至少拥有一个梦想，有一个理由去坚强。心若没有栖息的地方，到哪里都是在流浪。', 2);
INSERT INTO `moment` (content, user_id) VALUES ('不乱于心，不困于情。不畏将来，不念过往。如此，安好。', 3);
INSERT INTO `moment` (content, user_id) VALUES ('如果你给我的，和你给别人的是一样的，那我就不要了。', 3);
INSERT INTO `moment` (content, user_id) VALUES ('故事的开头总是这样，适逢其会，猝不及防。故事的结局总是这样，花开两朵，天各一方。', 2);
INSERT INTO `moment` (content, user_id) VALUES ('你不愿意种花，你说，我不愿看见它一点点凋落。是的，为了避免结束，你避免了一切开始。', 2);
INSERT INTO `moment` (content, user_id) VALUES ('你如果认识从前的我，也许你会原谅现在的我。', 4);
INSERT INTO `moment` (content, user_id) VALUES ('每一个不曾起舞的日子，都是对生命的辜负。', 2);
INSERT INTO `moment` (content, user_id) VALUES ('向来缘浅，奈何情深。', 2);
INSERT INTO `moment` (content, user_id) VALUES ('心之所向 素履以往 生如逆旅 一苇以航', 3);
INSERT INTO `moment` (content, user_id) VALUES ('生如夏花之绚烂，死如秋叶之静美。', 3);
INSERT INTO `moment` (content, user_id) VALUES ('答案很长，我准备用一生的时间来回答，你准备要听了吗？', 4);
INSERT INTO `moment` (content, user_id) VALUES ('因为爱过，所以慈悲；因为懂得，所以宽容。', 4);
INSERT INTO `moment` (content, user_id) VALUES ('我们听过无数的道理，却仍旧过不好这一生。', 1);
INSERT INTO `moment` (content, user_id) VALUES ('我来不及认真地年轻，待明白过来时，只能选择认真地老去。', 2);

SELECT
  moment.id id, moment.content content, moment.createAt createTime, moment.updateAt updateTime,
  JSON_OBJECT("id", users.id, "name", users.name) AS users, # JSON_OBJECT() 以 json 格式返回
	(SELECT COUNT(*) FROM comment WHERE comment.moment_id = moment.id) AS commentCount, # 子查询
	(SELECT COUNT(*) FROM moment_label WHERE moment_label.moment_id = moment.id) AS labelCount # 子查询
FROM moment
LEFT JOIN users ON moment.user_id = users.id 
LIMIT 0, 10;

SELECT * FROM moment WHERE id = ? AND user_id = ?;

UPDATE moment SET content = ? WHERE id = ?;

DELETE FROM moment WHERE id = ?; 


INSERT INTO comment (content, user_id, moment_id) VALUES (?, ?, ?);
 
ALTER TABLE `comment` MODIFY comment_id INT;

UPDATE `comment` SET content = ? WHERE id = ?;

DELETE FROM comment WHERE id = ?;

SELECT 
	comment.id id, comment.content content, comment.comment_id commentId,
	JSON_OBJECT("id", users.id, "name", users.name) 
FROM comment 
LEFT JOIN users ON comment.user_id = users.id
WHERE moment_id = 1;

# 获取动态详情（包括评论和标签）
SELECT
  moment.id id, moment.content content, moment.createAt createTime, moment.updateAt updateTime,
  JSON_OBJECT("id", users.id, "name", users.name) AS user, # JSON_OBJECT() 以 json 格式返回
	# IF 语句类似三元运算符 参数一判断条件 参数二true时返回值 参数三 false 时返回值
	IF(COUNT(comment.id),JSON_ARRAYAGG(
		JSON_OBJECT("id", comment.id, "content", comment.content, "commentId", comment.comment_id, "user", JSON_OBJECT("id", cu.id, "name", cu.name))
	),NULL)  AS comments,
	(SELECT IF(COUNT(l.id),JSON_ARRAYAGG(
		JSON_OBJECT("id", l.id, "name", l.name)
	) ,NULL) FROM moment_label ml LEFT JOIN label l ON ml.label_id = l.id WHERE ml.moment_id = moment.id) AS labels
-- 	IF(COUNT(l.id),JSON_ARRAYAGG(
-- 		JSON_OBJECT("id", l.id, "name", l.name)
-- 	) ,NULL) AS labels
FROM moment
LEFT JOIN users ON moment.user_id = users.id 
LEFT JOIN comment ON moment.id = comment.moment_id
LEFT JOIN users cu ON  comment.user_id = cu.id
-- LEFT JOIN moment_label ml ON moment.id = ml.moment_id
-- LEFT JOIN label l ON ml.label_id = l.id
WHERE moment.id = 1;


ALTER TABLE users ADD avatar_url VARCHAR(200);

SELECT * FROM avatar WHERE user_id = 5;


SELECT
  moment.id id, moment.content content, moment.createAt createTime, moment.updateAt updateTime,
  JSON_OBJECT("id", users.id, "name", users.name, "Avatar", users.avatar_url) AS users, # JSON_OBJECT() 以 json 格式返回
  (SELECT JSON_ARRAYAGG(CONCAT("http://localhost:8000/moment/images/",file.filename)) FROM file WHERE file.moment_id = moment.id) images # CONCAT(字符串拼接)
FROM moment
LEFT JOIN users ON moment.user_id = users.id 
WHERE moment.id = 1;

["http://localhost:8000/moment/images/6edc578a0c2ad0fff79b855ca727f5f4", 
"http://localhost:8000/moment/images/b82a12e3c37d616383539a3775dc2a13", 
"http://localhost:8000/moment/images/21a7e1bd3f218519f923f8d3d1e0c3f6"]
