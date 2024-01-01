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
select * from sales.admins;
SELECT * FROM sales.admin_roles;
SELECT * FROM sales.lead_access_policies;
select * from sales.hrms_candidate_activities;
desc sales.hrms_candidate_activities;
select * from sales.hrms_candidate_interactions;
select * from sales.hrms_candidates where id=36;

desc sales.hrms_candidates;
select lead_owner_id from lead_access_policies where lead_accessor_id =1;


