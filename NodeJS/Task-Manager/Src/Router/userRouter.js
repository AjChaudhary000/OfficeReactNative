const express = require('express');
const auth = require('../MiddleWare/auth');
const User = require('../Model/UserModel');
const router = new express.Router();
router.post('/user', async (req, res) => {
    const UserData = new User(req.body);
    try {
        await UserData.save();
        res.status(201).send(UserData)
    } catch (e) {
        res.status(400).send(e)
    }
});
router.post('/user/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.genrateAuthToken()

        res.status(200).send({ user, token })
    } catch (e) {
        res.status(400).send(e.toString());
    }
})
router.get('/user/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => token.token != req.token)
        await req.user.save()
        res.status(200).send("Logout  User ..")
    } catch (e) {
        res.status(400).send(e.toString());
    }
})
router.get('/user/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.status(200).send(" All Logout  User ..")
    } catch (e) {
        res.status(400).send(e.toString());
    }
})
router.get('/user', async (req, res) => {
    try {
        const users = await User.find();
        if (!users) return res.status(404).send("User data Not Found ")
        res.status(200).send(users)
    } catch (e) {
        res.status(400).send(e)
    }
})
router.get('/user/me', auth, async (req, res) => {
    res.send(req.user);
})
router.get('/user/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const users = await User.findById(_id);
        if (!users) return res.status(404).send("User data Not Found ")
        res.status(200).send(users)
    } catch (e) {
        res.status(400).send(e)
    }
})
router.patch('/user/me', auth, async (req, res) => {
    const updateData = Object.keys(req.body);
    const validData = ["username", "email", "password"]
    const validAction = updateData.every((update) => {
        return validData.includes(update)
    });
    if (!validAction) return res.status(400).send("User Can not Be Change a Password .. ");

    try {
        const user = await User.findByIdAndUpdate(req.user._id, req.body, { new: true, runValidators: true });
        //if (!user) return res.status(404).send("User data Not Found ")
        res.status(200).send(user)
    } catch (e) {
        res.status(400).send(e);
    }
})
router.delete('/user/me', auth, async (req, res) => {
    try {
        const user = await User.deleteOne({ _id: req.user._id });
        if (!user) return res.status(404).send("User data Not Found ")
        res.status(200).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})
module.exports = router;