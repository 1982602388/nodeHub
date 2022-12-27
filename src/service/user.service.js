const connection= require('../app/database')

class UserService{
    async create(user) {
        const { name, password } = user
        const statement = 'INSERT INTO users (name,password) VALUE(?,?);';
        const result= await connection.execute(statement,[name,password])
        return result
    }
}

module.exports= new UserService()