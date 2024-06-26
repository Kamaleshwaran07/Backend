import express from 'express'
import userContoller from '../Controllers/usercontroller.min.js'
// import auth from '../Middleware/auth.min.js'
const userrouter = express.Router()

userrouter.post('/signup', userContoller.signup)
userrouter.post('/signin', userContoller.signin)

userrouter.post('/getUserInfo',  userContoller.getUser)
userrouter.post('/forgotpassword', userContoller.forgotPassword)
userrouter.post('/resetpassword/:userId/:token', userContoller.resetPassword)

export default userrouter