
const momentService = require('../service/moment.service')


class MomentController{

    async create(ctx, next) {
        // 1.获取数据（user_id,content)
        const userId = ctx.user.id
        const content = ctx.request.body.content
    

        // 将数据插入数据库
        const result = await momentService.create(userId, content)
        console.log(result,'222');
        ctx.body='插入成功'
    }
    async list(ctx, next) {
        // 获取数据
        const { offset, size } = ctx.query
        // 查询列表
        const result = await momentService.getMomentList(offset, size)
        ctx.body=result
        
    }
}

module.exports=new MomentController()