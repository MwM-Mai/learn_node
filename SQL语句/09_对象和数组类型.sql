# 将联合查询的数据转成对象（一对多）JSON_OBJECT(key, value)
SELECT 
	products.id id, products.title title, products.price price, 
	JSON_OBJECT('id', brand.id, 'name', brand.`name`, 'website', brand.website) brand
FROM `products` 
LEFT JOIN `brand` ON products.brand_id = brand.id;


# 将查询到的多条数据，组成对象，放到一个数组中（多对多） 通过 Group By 进行组合 JSON_ARRAYAGG(表达式) 转化为数组中包含对象
SELECT 
	stu.id studentId, stu.name studentName, stu.age studentAge,
	JSON_ARRAYAGG(JSON_OBJECT("id", cs.id, "name", cs.`name`, "price", cs.price))
FROM students stu 
JOIN students_select_courses ssc ON stu.id = ssc.student_id	
JOIN courses cs ON ssc.course_id = cs.id GROUP BY stu.id;






