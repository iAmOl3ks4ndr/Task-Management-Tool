# Task Management Tool

## About The Application

The purpose of this simple application is to help users effectively manage tasks and achieve goals (for example: complete a project before a certain deadline). It is a web application based on a Laravel framework and MySQL database. You can create your own account, log in to it, and create workspaces where you can manage your tasks and achieve goals.

## Project Author

This project was made by Oleksandr Olefirenko from SD2b class for Server-side Development module of Computing in Software Development course in Dundalk Institute of Technology.

## Application's Features

The following features are:
- Accounts system (Ability to sign up and log in)
- Create, manage, and delete workspaces
- Create, manage, and delete their tasks
- Your workspace is divided into 5 stages
  - Backlog
  - Ready to Start
  - In Progress
  - Quality Check
  - Done
- Set tasks' priority

The idea is that you create a workspace (project) and its backlog items (tasks) and you can manage them by placing them into the stages outlined above.

## Setup

You need to do the following in order to launch the application:  
1. Launch MySQL Database in XAMPP using port 3306
2. Create the database by running the query:
```bash
CREATE DATABASE project_management_tool;
```

- If the database already exists, run:
```bash
DROP DATABASE project_management_tool;
CREATE DATABASE project_management_tool;
```

3. In the project folder, run:
```bash
php artisan migrate
```

- You can reset the database tables by running:
```bash
php artisan migrate:refresh
```

4. Run the application using:
```bash
php artisan serve
```
