const express = require('express');
const app = express();

const schoolRoute=require('./routes/school')
const courseRoute=require('./routes/course')
const studentRoute=require('./routes/student')


app.use('/school', schoolRoute);
app.use("/course",courseRoute)
app.use("/student",studentRoute)


app.listen(3000, () => console.log('server started'));