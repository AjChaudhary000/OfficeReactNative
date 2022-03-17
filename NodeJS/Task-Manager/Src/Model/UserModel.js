
const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
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
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) { throw new Error("Email Id is Not Valid ....") }
        }
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
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
userSchema.methods.genrateAuthToken = async function () {
    const user = this;
    console.log(user)
    const token = await jwt.sign({ _id: user._id.toString() }, "MyTokenApp");
    console.log("token:-= ", token);

    user.tokens = user.tokens.concat({ token });

    await user.save();
    return token;

}
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Login unable ...")
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("User Password Wrong  ...");
    return user;
}
userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    delete userObject.tokens
    return userObject;
}
userSchema.virtual('Task', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'owner'
})
const User = mongoose.model('User', userSchema);
module.exports = User;
