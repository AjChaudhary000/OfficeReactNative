const mongoose = require('mongoose');
const express = require('express');
const user = require('./Router/userRouter');
const task = require('./Router/taskRouter');
const app = express()
const port = 3000
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/TaskApp");
app.get('/', (req, res) => res.send('Hello World!'))
app.use(user);
app.use(task)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
