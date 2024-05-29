const joi = require('joi')
const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Role: {
        type: String,
        required: false,
        default: 'false',
        enum: ["true", "false"]
    },
    Status: {
        type: String,
        required: false,
        default: "Active",
        enum: ["Active", "Blocked", "Pending"]
    },
    Date: {
        type: Date,
        required: false,
        default: new Date
    },
    Profile: {
        type: String,
        required: false,
        default: "https://www.murrayglass.com/wp-content/uploads/2020/10/avatar-scaled.jpeg"
    }
})
const UserModel = mongoose.model('user', UserSchema)


const UserValidation = (UV) => {
    let uservalidation = joi.object({
        UserName: joi.string().required(),
        Email: joi.string().required().email(),
        Password: joi.number().required(),
        Profile: joi.string().required(),

    })

    return uservalidation.validate(UV)
}
module.exports = {UserModel,UserValidation}