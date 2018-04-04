const sqlClient = require("../tools/index")
const escape = require('../tools/escape')

const blogs  = {
    async addBlogs(title,name,content){
        return await sqlClient.query(escape`INSERT INTO bloglist SET title = ${title},name=${name},content=${content}`)
    },
    async searchBlogs(){
        return await sqlClient.query(`select * from bloglist`)
    },
    async searchMainBlog(id){
        return await sqlClient.query(escape`select * from bloglist where id = ${id}`)
    }
}

module.exports = blogs