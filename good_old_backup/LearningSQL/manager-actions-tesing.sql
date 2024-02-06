SELECT * FROM sales.report_entries;
select * from sales.status_activities;
use sales;
select * from sales.manager_actions;

select * from sales.reports;

SELECT * FROM sales.report_entries where to_number = 8654321098;   # //1
SELECT * FROM sales.report_entries where to_number = 9876543210;   # //2
SELECT * FROM sales.report_entries where to_number = 8765432109;   # //1
SELECT * FROM sales.report_entries where to_number = 9875349507;   #dec2 test-1 #79 //3 
SELECT * FROM sales.report_entries where to_number = 9175984300;   #dec-2.1 test-1#80 //3

select * from sales.status_activities where status = 'complete_program_explained';

select * from sales.leads;



delete from sales.reports;
delete from sales.manager_actions;
delete from sales.report_entries;

select * from admins;
SET SQL_SAFE_UPDATES = 0;


 select 
	leads.id
from
	report_entries
join leads
	on (report_entries.to_number = leads.mobile or report_entries.to_number = leads.whatsapp)
    join reports
	on report_entries.report_id = reports.id
    join status_activities
	on (
		leads.id = status_activities.lead_id
		and status_activities.status = "complete_program_explained"
        )
        where
	report_id =93
    and status_activities.updated_by = 6
group by
	leads.id;

select * from sales.leads;




INSERT INTO sales.admins(created_at, updated_at, fname, lname, email, access_type) 
VALUES ("2022-12-01 12:00:00", "2022-12-01 12:00:00", "sohel", "Qadri", "sohelsyed.mail@gmail.com", "allowed");