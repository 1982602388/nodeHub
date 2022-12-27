// const { verifyUser } =require('../middleware/users.middleware') 
const Router = require('koa-router')
const { create } =require('../controller/user.controller')

const useRouter = new Router({ prefix: '/users' })
useRouter.post('/', create)
// useRouter.post('/',verifyUser, create)


module.exports = useRouter
