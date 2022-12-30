const connection= require('../app/database')

class UserService{
    async create(user) {
        const { name, password } = user
        console.log(user);
        const statement = 'INSERT INTO users (name,password) VALUE(?,?);';
        const result= await connection.execute(statement,[name,password])
        return result[0]
    }

    async getUserByName(name) {
        const statement = `SELECT * FROM users WHERE name = ?;`
        const result = await connection.execute(statement, [name])
        
        return result[0]
    }
}

module.exports= new UserService()