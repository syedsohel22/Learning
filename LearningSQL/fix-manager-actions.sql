use sales;

select * from sales.manager_actions;
select * from sales.reports;
select * from sales.report_entries;

delete from sales.report_entries;
delete from sales.reports;
delete from sales.manager_actions;
SET SQL_SAFE_UPDATES = 0;

-- if admins don't have full name
UPDATE sales.admins
SET fname = NULL, lname = NULL
WHERE id = 3;

SELECT * FROM sales.lead_access_policies;

select * from sales.lead_access_policies where lead_owner_id =2;

SELECT * FROM sales.admin_roles;
SELECT * FROM sales.lead_access_policies;