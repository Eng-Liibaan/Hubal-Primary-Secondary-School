const UserData = require('../model/User-Model')
const joi = require('joi')
const UserValidation = (UV) => {
    let uservalidation = joi.object({
        Name: joi.string().required().min(3),
        Email: joi.string().required().email(),
        Password: joi.string().required()
    })
    return uservalidation.validate(UV)
}

const EmailValidation = (Email) => {
    let EmailValidation = joi.object({
        Email: joi.string().required().email()
    })
    return EmailValidation.validate(Email)
}

const PasswordValidation = (Password) => {
    let PasswordValidation = joi.object({
        Password: joi.string().required()
    })
    return PasswordValidation.validate(Password)
}

const ConfirmValidation = (Confirm) => {
    let ConfirmValidation = joi.object({
        Confirm: joi.string().required()
    })
    return ConfirmValidation.validate(Confirm)
}

module.exports={UserValidation,EmailValidation,PasswordValidation,ConfirmValidation}