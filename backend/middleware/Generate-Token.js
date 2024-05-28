const jwt = require('jsonwebtoken')
require('dotenv').config()
const GenerateToken = (decode, res) => {
    let token = jwt.sign({ user: decode }, process.env.token, { expiresIn: "60s" })
    res.cookie("token", token, {
        path: "/",
        expires: new Date(Date.now() + 1000 * 32),
        httpOnly: true,
        SameSite: "Liibaan"
    })

    const { Password, ...Info } = decode._doc

    res.status(200).json({ status: "Success", message: "Successfully Logged In", ...Info, token })

}


module.exports = GenerateToken