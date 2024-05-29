const express = require('express');
const server = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()

// const UserRouter = require('./router/User-Router')
const AuthRouter = require('./router/Auth-Router')
const ClassRouter = require('./router/Class-Router')
const StudentRouter = require('./router/Student-Router')
const ReceiptRouter = require('./router/Receipt-Router');

const { DataBase } = require('./config/Database');
server.use(express.json())
server.use(cors())
server.use(cookieParser())
// server.use('/api/user', UserRouter)
server.use('/api/auth', AuthRouter)
server.use('/api/class', ClassRouter)
server.use('/api/student', StudentRouter)
server.use('/api/receipt', ReceiptRouter)

const path = require('path')

server.use(express.static(path.join(__dirname, "../frontend/dist")))

server.get('*', (req, res) => { res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html")) })

server.listen(process.env.port, DataBase, () => console.log('Server Running Port 3000 !'))

