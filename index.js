require('dotenv').config();
const connectDB = require('./config/db');
connectDB();

const express = require('express');
const app = express();
app.use(express.json());


const { createUser, listCourses } = require('./controllers/userController');
const { createCourse } = require('./controllers/courseController');

app.post('/api/user', createUser)
app.post('/api/course', createCourse)
app.get('/api/courses', listCourses)

app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on PORT ${process.env.PORT}`)
});