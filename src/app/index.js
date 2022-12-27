const koa = require('koa')
const useRouter = require('../router/user.router')
const bodyParser = require('koa-bodyparser')
// const {errorHandler}=require("./error-handle")

const app = new koa()

app.use(bodyParser())
app.use(useRouter.routes())
app.use(useRouter.allowedMethods())

// app.on("error",errorHandler)

module.exports= app