select * from sales.manager_actions;
select * from sales.reports;
select * from sales.report_entries;

desc sales.manager_actions;

select * from sales.lead_access_policies;

delete from sales.manager_actions;
delete from sales.reports;
delete from sales.report_entries;


SET SQL_SAFE_UPDATES = 0;


select lead_accessor_id as manager_id from sales.lead_access_policies where lead_owner_id = 1;




use sales;

