const { default: mongoose } = require('mongoose')
const multer = require('multer')
const path = require('path')

require('dotenv').config()

exports.DataBase = mongoose.connect(process.env.mongodb).then(() => console.log("Successfully Connected Mongodb Server !"))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
       console.log(cb("",'backend/public/images'))
    },
    filename: (req, file, cb) => {
        let ImageValidation = file.fieldname + "_" + Date.now() + path.extname(file.originalname)
        cb(null, ImageValidation)
    }
})

exports.Upload = multer({
    storage: storage
}).single("Profile")