const verifyUser = async (ctx, next) => {
    // 1.获取用户名和密码
    const { name, password } = ctx.request.body
   
    // 2.判断用户名或者密码不能为空
    if (!name || !password || name === '' || password === '') {
        const error = new Error('用户名或者密码不能为空~')
        
        return ctx.app.emit("error",error,ctx)
    }

    // 3.判断这次注册的用户名是没有被注册过的

    // await next()
}
module.exports = {
    verifyUser
}