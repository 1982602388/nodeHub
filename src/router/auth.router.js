const Router = require('koa-router')
const { verifyAuth } = require('../middleware/auth.middleware')
const {login}=require('../controller/auth.controller')

const authRouter = new Router()

authRouter.post('/login', verifyAuth, login)

module.exports=authRouter