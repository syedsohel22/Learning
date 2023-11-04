CREATE DATABASE test_DB;


USE test_DB;

CREATE TABLE user (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    salary INT
);

select * from user