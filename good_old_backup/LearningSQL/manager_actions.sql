use sales;
-- CPE marked leads id
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
      --   and status_activities.created_at > CONVERT_TZ("2023-12-01", "+00:00", "+05:30")
--         and status_activities.created_at < CONVERT_TZ(DATE_ADD("2023-12-01", INTERVAL 1 DAY), "+00:00", "+05:30")
	)
where
	report_id = 64# update the report id here
group by
	leads.id;
 
 -- get the sum of talktime
 /*
select
	leads.id,
    sum(duration) as talktime_in_sec
from
	leads
join report_entries
	on (report_entries.to_number = leads.mobile
        or report_entries.to_number = leads.whatsapp)
where
	leads.id IN (49,40)
group by
	leads.id;
    */
    
select
	a.lead_id ,
    a.duration,
    a.lead_fname
    
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
		-- and CONVERT_TZ(report_entries.created_at, "+00:00", "+05:30") < DATE_ADD(DATE("2023-11-30"), INTERVAL 1 DAY) #  replace with reports.date with same format #prod
		and report_entries.created_at < DATE_ADD(DATE("2023-11-30"), INTERVAL 1 DAY) #  replace with reports.date with same format #for local testing 
		and leads.id IN (76,77)  # add the ids from 1st query result
	)
	where admin_id = 1
	group by leads.id, admin_id
) a
where
	duration < 30*60;