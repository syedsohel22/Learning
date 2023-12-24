 -- 19/12/2023 Manager actions final query Testing
 use sales;
SELECT 
    a.lead_id, a.lead_fname, a.lead_lname, a.duration
FROM
    (SELECT 
        leads.id AS lead_id,
            leads.fname AS lead_fname,
            leads.lname AS lead_lname,
            SUM(report_entries.duration) AS duration
    FROM
        reports
    JOIN report_entries ON (reports.id = report_entries.report_id
        AND CONVERT_TZ(report_entries.calledOn, '+00:00', '+05:30') < DATE_ADD(DATE('2023-12-16'), INTERVAL 1 DAY))
    JOIN leads ON ((report_entries.to_number = leads.mobile
        OR report_entries.to_number = leads.whatsapp)
        AND leads.id IN (5 , 6, 7))
    WHERE
        admin_id = 1
    GROUP BY leads.id , admin_id) a
WHERE
    duration < 30 * 60;
 