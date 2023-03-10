const connection = require('../app/database')

class MomentService{
    async create(userId,content) {
        const statement = `INSERT INTO moment (content, user_id) VALUES (?, ?);`
        const [result] = await connection.execute(statement, [ content,userId])
        
        return result
    }
    async getMomentList(offset, size) {
        const statement = `
     SELECT m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
     JSON_OBJECT('id',u.id,'name',u.name) author
      FROM moment m LEFT JOIN users u ON m.user_id=u.id LIMIT ?,?;
        `
        const [result] = await connection.execute(statement, [offset, size])
        console.log(result);
        return result
    }
}

module.exports=new MomentService()