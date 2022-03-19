const mongoose = require('mongoose');
const express = require('express');
const user = require('./Router/userRouter');
const task = require('./Router/taskRouter');
const app = express()
const path = require("path")
const port = 3000
app.use(express.json())
app.use(express.static(path.join(__dirname, "../images")))
const multer = require('multer');
mongoose.connect("mongodb://127.0.0.1:27017/TaskApp");
app.get('/', (req, res) => res.send('Hello World!'))
app.use(user);
app.use(task)
const upload = multer({
    dest: 'images'
})
app.get('/upload', upload.single('upload'), (req, res) => {
    res.send("hello")
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
