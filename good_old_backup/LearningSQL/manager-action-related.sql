select 
	leads.id,mobile,whatsapp
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
        and status_activities.created_at > CONVERT_TZ(reports.date, "+00:00", "+05:30")
        and status_activities.created_at < CONVERT_TZ(DATE_ADD(reports.date, INTERVAL 1 DAY), "+00:00", "+05:30")
	)
where
	report_id = 7
group by
	leads.id;