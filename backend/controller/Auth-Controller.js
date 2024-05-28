// const GenerateToken = require('../middleware/Generate-Token');
// const { UserValidation, EmailValidation, PasswordValidation } = require('../middleware/Validation-Model');
// const UserData = require('../model/User-Model')
// const bcrypt = require('bcrypt')
// const SignUp = async (req, res) => {
//     try {
//         let { Name, Email, Password, Status, Role } = req.body;
//         let { error } = UserValidation(req.body)
//         if (error) return res.status(200).json(error.message)
//         let salt = await bcrypt.genSalt(10)
//         const HashPass = await bcrypt.hash(Password, salt)
//         const InsertNewUser = new UserData({ Name, Email, Password: HashPass, Status, Role, })
//         if (req.file) {
//             InsertNewUser.Profile = req.file.filename
//         }
//         const UserExist = await UserData.findOne({ Email })
//         if (UserExist) return res.status(200).json("User Already Exist")

//         await InsertNewUser.save()
//         res.status(201).json({ status: "Success", message: "Successfully Inserted Data User", InsertNewUser })
//     } catch (error) {

//         res.send(error.message)

//     }

// }
// const Login = async (req, res) => {
//     try {
//         let { Email, Password } = req.body
//         const { error: email } = EmailValidation({ Email })
//         const UserExist = await UserData.findOne({ Email })
//         if (email) return res.status(200).json(email.message)
//         if (!UserExist) return res.status(404).json("User Not Found")
//         const { error: password } = PasswordValidation({ Password })
//         if (password) return res.status(200).json(password.message)
//         const IsPasswordCorrect = await bcrypt.compare(Password, UserExist.Password)
//         if (!IsPasswordCorrect) return res.status(404).json("Invalid Credential")
//         GenerateToken(UserExist, res)

//     } catch (error) {
//         res.send(error.message)
//     }
// }

// const LogOut = async (req, res) => {
//     res.send('welcome to getclas')
// }

// module.exports = { SignUp, LogOut, Login }