

USE xyz;

CREATE TABLE employee (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    salary INT
);

INSERT INTO employee (id, name,salary) values(1,"Adam",25000),(2,"Bob",30000),(3,"Don",40000);

select * from employee;