def allocate_projects(employees, project):
    assignments = []
    for employee in employees:
        for project in project:
            match = set(employee.skills) & set(project.requried_skills)
            if match and not employee.current_project:
                employee.current_project = name
                assignments.append(employee.name, project.name)