CREATE DATABASE todos_db;
USE todos_db;
CREATE TABLE todos(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
status boolean NOT NULL,
progress INT NOT NULL,
PRIMARY KEY(id)
);

-- above commands to create a table of todos with column name 'status' progress 