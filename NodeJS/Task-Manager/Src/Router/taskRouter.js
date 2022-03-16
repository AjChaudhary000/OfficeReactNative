const express = require('express');
const Task = require('../Model/TaskModel');
const router = new express.Router();
router.post('/task', (req, res) => {
    const TaskData = new Task(req.body);
    TaskData.save().then(() => {
        res.json(TaskData);
    }).catch((e) => {
        res.status(500).send(e)
    });
})
router.get('/task', (req, res) => {
    Task.find().then((task) => {
        if (!task) return res.status(404).send("Task Data Not Found ..");
        res.json(task)
    }).catch((e) => {
        res.status(500).send(e)
    })
})
router.get('/task/:id', (req, res) => {
    const id = req.params.id
    Task.findById(id).then((task) => {
        if (!task) return res.status(404).send("Task Data Not Found ..");
        res.json(task)
    }).catch((e) => {
        res.status(500).send(e)
    })
})
module.exports = router;