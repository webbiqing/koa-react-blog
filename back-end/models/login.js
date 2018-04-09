const sqlClient = require("../tools/index")
const escape = require('../tools/escape')

module.exports = async function (username,pwd){
    return await sqlClient.query(escape`select count(*) as countnum from user where username = ${username} and pwd = ${pwd}`)
}
