# Masai Ticketing system

### Maximum Marks - 10

```
✅ able to submit the application - 1 mark (minimum score)
✅ able to do all the things mentioned for "/" route - 0.5 mark
✅ able to do all the things mentioned for "/add/student" route - 2 mark
✅ able to do all the things mentioned for "/add/instructor" route - 1.5 mark
✅ able to do all the things mentioned for "/students" route - 1 mark
✅ able to do all the things mentioned for "/instructors" route - 1 mark
✅ able to do all the things mentioned for "/tickets" route - 1 mark
✅ able to do all the things mentioned for "/address" route - 1 mark
✅ able to maintain the "logs.txt" file as per the instructions - 1 mark
```

Initialize a backend project using the right command for it and create an express application for Masai Ticketing system with following API endpoints:

### /

- This represents the home route of the server.
- If the client is hitting a request at this endpoint, there should be a response as `Welcome to the Home Page`.
- This response should be a `h1` heading type.
- You have to take care of this at backend itself.

### /add/student

- This route is responsible for adding a new student to the database in our case which is the `db.json` file.
- You can refer the data file to understand what are the fields required to add.

```
id => This is going to be the uid from os inbuilt module
name => This is going to be the username from os inbuilt module

Following things have to be taken from request body:

age => This can be any random age as per your choice
location => This can be any random location as per your choice
tickets => This is going to be the tickets generated by this particular user
    :ticket_id => This can be any random ticket number
    :title => This can be any random ticket title
    :body => This can be any random ticket body

tickets should be an array of objects means a tickets can contain one or more objects
```

- If there is some error

```
Send the complete err as response
```

- In case of no error, send complete students details as the response that should contain the newly added student as well.

### /add/instructor

- This route is responsible for adding a new instructor to the database in our case which is the `db.json` file.
- You can refer the data file to understand what are the fields required to add.

```
id => This is going to be the uid from os inbuilt module
name => This is going to be the username from os inbuilt module

Following things have to be taken from request body:

age => This can be any random age as per your choice
location => This can be any random location as per your choice
sub => This can be any random subject of your choice
exp => This can be any random number depicting the years of experience
```

- If there is some error

```
Send the complete err as response
```

- In case of no error, send complete instructors details as the response that should contain the newly added instructor as well.

### /students

- This route is responsible for getting all the students details.
- In case of an error send the complete error as the response.
- In case everything works fine send the details of all the students as the response.

### /instructors

- This route is responsible for getting all the instructors details.
- In case of an error send the complete error as the response.
- In case everything works fine send the details of all the instructors as the response.

### /tickets

- This route is responsible for counting all the tickets and providing the following response:

```
Total number of tickets in the system are 2
```

- Basically it will count all the tickets, for example if there are 2 students and they have created 2 tickets each so that total number of tickets are 4.
- In case of an error send the complete error as the response.

### /address

- Once the client has made a request over here, you are supposed to handle the `ip address` and `family` of `masaischool.com`
- Hint: You can use inbuilt `DNS` module.
- Following should be the response:

```
URL: masaischool.com IP Address: 13.235.220.57 Family: IPv4
```

- In case of an error, send the complete error as the response

### Logs Keeping

- You have to keep a log file which will maintain the record of every operation that has been performed
- The content of the file will look something like the following:

```
The home route visited at Thu May 11 2023 15:32:58 GMT+0530 (India Standard Time)
New student has been added to the database at Thu May 11 2023 15:43:13 GMT+0530 (India Standard Time)
New instructor has been added to the database at Thu May 11 2023 16:33:19 GMT+0530 (India Standard Time)
All the students data provided at Thu May 11 2023 16:46:33 GMT+0530 (India Standard Time)
All the instructors data provided at Thu May 11 2023 17:33:46 GMT+0530 (India Standard Time)
Total number of tickets in the system are 3 at Thu May 11 2023 17:33:53 GMT+0530 (India Standard Time)
URL: masaischool.com IP Address: 13.235.220.57 Family: IPv4
```

- You can see for all the routes visited by the client, it is keeping track of the time stamp as well except the while getting the address, take care of this thing as well.

#### All the readFile operations should be synchronous.

### Important Points to keep in mind

- You don't have to run the server (listen the server), you just have to export it at the end.
- You are not supposed to use `nodemon` as you are going to export the server.

```
module.exports=app
```

- In order to test the things locally you might need to run the server, but while testing on CP just comment out the `server.listen()` and just export the server.
- Should clean/delete the `logs.txt` each and every time before testing.
- should keep the `db.json` as it was in initial condition, which means we have to remove the added data and make the `db.json` as it was in initial state before testing.
- All the file operations are going to be synchronous, this point is very important.

Your solution should be well-organized and easy to understand, with clear and concise comments explaining the logic behind each step.

## Installation

- Node version v16.16.0 is mandatory to use
- please make sure you do not push package-lock.json

```
npm install

// to start server
npm start

// complete functions on index.js

// test locally (stop server then run test)
npm run test
```

## Requirements

- The code should be written in Node.js.
- Use the built-in modules and external modules that are required.
- Add comments throughout your code to explain the logic behind each step

## Evaluation Criteria

- Correct implementation of all the routes
- Proper handling of edge cases
- Code readability and organization
- Comments explaining the logic behind each step

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time