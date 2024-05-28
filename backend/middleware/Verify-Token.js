const jwt = require('jsonwebtoken')
require('dotenv').config()

const VerifyToken = (req, res, next) => {
    let token = req.headers.cookie && req.headers.cookie.split("=")[1]
    if (!token) return res.status(404).json("Cookie Not Found")
    jwt.verify(token, process.env.token, (err, decode) => {
        if (err) return res.status(200).json("Invalid Token")
        req.user = decode
        next()
    })
}

module.exports = VerifyToken