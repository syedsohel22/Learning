use sales;

select
    a.lead_id ,
    a.lead_fname,
    a.duration
  from (
    select
      leads.id as lead_id,
      leads.fname as lead_fname,
       sum(report_entries.duration) as duration
    from 
      reports
    join report_entries on (reports.id = report_entries.report_id)
    join leads on (
      (report_entries.to_number = leads.mobile OR report_entries.to_number = leads.whatsapp)
      -- and CONVERT_TZ(report_entries.calledOn, "+00:00", "+05:30") < DATE_ADD(DATE("${formattedDate}"), INTERVAL 1 DAY) #  replace with reports.date with same format #prod
      and report_entries.calledOn < DATE_ADD(DATE("2023-12-03"), INTERVAL 1 DAY) #  replace with reports.date with same format #for local testing 
      and leads.id IN (87,88,89,90,91,92,93,92)  # add the ids from 1st query result
    )
    where admin_id = 1
    group by leads.id, admin_id
  ) a
  where
    duration < 30*60;
    
    
    
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
	report_id =130
    and status_activities.updated_by = 1
group by
	leads.id;
    
    
    
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
     report_id =131
   and status_activities.updated_by = 1
 group by
    leads.id;
    
    
    
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
	report_id =134
  and status_activities.updated_by = 1
group by
	leads.id;
    
    
    
    -- 04-12-2023
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
        )         where
     report_id =138
   and status_activities.updated_by = 1
 group by
     leads.id;

    
    
    
    
    select * from sales.status_activities where status =! 'droped'