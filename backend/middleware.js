
const jwt = require('jsonwebtoken')
require('dotenv').config()
const VerifyToken = (req, res, next) => {
    let token = req.headers.token;
    if (token) {
        jwt.verify(token, process.env.token, (err, user) => {
            req.user = user
            if (err) return res.send("Xogtada is invalid")
        })
        next()

    } else {
        res.send('token access denied !')
    }

}

const AuthorizationUser = (req, res, next) => {
    try {
        VerifyToken(req, res, () => {
            const { Role, id, Status } = req.user
            if (id && Role === 'false') {
                
                if (Status === 'Active') {
                    next()
                }
                if (Status === 'Pending') {
                    setTimeout(() => {
                        next()
                    }, 4000);
                }
                if (Status === 'Blocked') {
                    res.send('Blocked ayaa ku saran')
                    return;
                }
            } else {
                res.send("access Denied user !")
            }
        })
    } catch (error) {
        res.send(error.message
        )
    }
}
const AuthorizationAdmin = (req, res, next) => {
    try {
        VerifyToken(req, res, () => {
            if (req.user.Role === 'true') {
                next()
            } 
        })
    } catch (error) {
        res.send(error.message)
    }
}
module.exports = { AuthorizationAdmin, AuthorizationUser }
