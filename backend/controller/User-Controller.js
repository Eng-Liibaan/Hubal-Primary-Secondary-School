// const UserData = require('../model/User-Model')
// // const bcrypt = require('bcrypt')
// const GetUsers = async (req, res) => {
//     try {
//         let { user } = req.user;
//         let GetAllUser = await UserData.find({ _id: { $ne: user._id } });
//         res.status(200).json(GetAllUser)
//     } catch (error) {
//         res.send(error.message)
//     }
// }
// const GetUser = async (req, res) => {
//     try {
//         let { user } = req.user;
//         let GetuserID = await UserData.findById(user._id)
//         res.status(200).json(GetuserID)
//     } catch (error) {
//         res.send(error.message)
//     }

// }

// // const UpdateUser = async (req, res) => {
// //     try {
// //         let { id } = req.params
// //         let { Name, Email, Password, Status, Role } = req.body;
// //         let salt = await bcrypt.genSalt(10)
// //         let EditUser = await UserData.findByIdAndUpdate(id, {
// //             Name, Email, Status, Role
// //         }, { new: true })
// //         if (Password) {
// //             const HashPass = await bcrypt.hash(Password, salt)
// //             EditUser.Password = HashPass
// //         }
// //         if (req.file) {
// //             EditUser.Profile = req.file.filename
// //         }
// //         await EditUser.save()
// //         res.status(200).json({ status: "Success", message: "Successfully Update User Data", EditUser })
// //     } catch (error) {
// //         res.send(error.message)
// //     }
// // }

// const DeleteUser = async (req, res) => {
//     try {

//         let { id } = req.params;
//         let RemoveUser = await UserData.findByIdAndDelete(id)
//         if (!RemoveUser) return res.send('')
//         res.status(200).json({ status: "Success", message: "Successfully Delete User Data", RemoveUser })

//     } catch (error) {
//         res.send(error.message)
//     }
// }

// module.exports = { GetUser, GetUsers, DeleteUser }