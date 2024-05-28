const mongoose = require('mongoose')

const { Schema, model } = mongoose

const UserSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    },

    Role: {
        type: String,
        required: false,
        default: false
    },
    Profile: {
        type: String,
        required: false,
        default: "Image.png"
    },
    Status: {
        type: String,
        required: false,
        default: "Active",
        enum: ["Active", "Pending", "Blocked"]
    }
}, { timestamps: true })

const UserModel = model("user", UserSchema)

module.exports = UserModel