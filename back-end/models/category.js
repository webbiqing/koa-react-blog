const sqlClient = require("../tools/index")
const escape = require('../tools/escape')

const category  = {
    async searchCategory(category){
        if(category){
            return await sqlClient.query(`SELECT * from category where category = ${category}`)
        }else {
            return await sqlClient.query(`SELECT * from category`)
        }
    }
}

module.exports = category