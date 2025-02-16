# Multi User Todo Application using Django

## Description

This project is a multi-user todo application built using Django. It allows users to create, manage, and track their tasks in a collaborative environment.

## Features

- User registration and authentication
- Create, edit, and delete tasks
- Assign tasks to specific users
- Mark tasks as completed
- Filter tasks based on status, priority, etc.

## Installation

1. Navigate to the project directory: `cd todo`
2. Install dependencies: `pip install django`
3. Set up the database: `python manage.py makemigrations`and `python manage.py migrate`
4. Create a superuser for admin access: `python manage.py createsuperuser`
5. Start the development server: `python manage.py runserver`

## Usage

1. Access the application through your browser at `http://localhost:8000/`
2. Register as a new user or log in with an existing account
3. Add and manage your todo tasks
4. Collaborate with other users by assigning tasks to them

## Contributing

If you'd like to contribute to this project, follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request
