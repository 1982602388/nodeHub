const UserService=require('../service/user.service')

class UserController{
    async create(ctx, next) {
        const user = ctx.request.body
        console.log(user);
        
        const result= await UserService.create(user)

        ctx.body=result
    }
}

module.exports=new UserController()