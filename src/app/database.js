const mysql = require('mysql2')
const config = require('./config')
 

const connections = mysql.createPool({
    post: config.MYSQL_HOST,
    database: config.MYSQL_DATABASE,
    user: config.MYSQL_USER,
    password:config.MYSQL_PASSWORD
})
connections.getConnection((err,conn) => {
    conn.connect(err => {
        if (err) {
            console.log("链接失败：",err);
        }
        else {
            console.log("链接数据库成功");
        }
    })
})

module.exports=connections.promise()