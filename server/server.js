//express is a minimal and flexible web application framework for Node.js
//here we import the express module
const express = require('express');
//this step creates a new express app instance
//the app object now represents your entire web server and allows you to define routes, middleware, etc
//think of app as the server controller
const app = express()
const port = 3000; //3000 for now

app.use(express.static('../client'));

//health check route
app.get('/api/health', (req, res) => {
    res.json({status: 'Server is running!'});
});

//mock data for tasks
const tasks = [
    { id: 1, title: "Finish project README", completed: false },
    { id: 2, title: "Create basic frontend UI", completed: true },
    { id: 3, title: "Implement first API route", completed: false }
];

app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
});