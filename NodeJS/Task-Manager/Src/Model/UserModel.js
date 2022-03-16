
const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        minlength: [8, " password length 8 char.."],
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) { throw new Error("Email Id is Not Valid ....") }
        }
    }
})
userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})
userSchema.pre('findOneAndUpdate', async function (next) {
    const user = this.getUpdate();
    if (user.password) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})
const User = mongoose.model('User', userSchema);
module.exports = User;
