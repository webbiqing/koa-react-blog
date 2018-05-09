const sqlClient = require("../tools/index")
const escape = require('../tools/escape')

const blogs  = {
    async addBlogs(title,name,content,category){
        const date = new Date();
        return await sqlClient.query(
            escape`INSERT INTO bloglist (title,name,content,category,date) VALUES (${title},${name},${content},${category},CURDATE())`
        )
    },
    async searchBlogs(){
        return await sqlClient.query(`select * from bloglist`)
    },
    async searchMainBlog(id){
        return await sqlClient.query(escape`select * from bloglist where id = ${id}`)
    },
    async deleteBlog(id){
        return await sqlClient.query(escape`Delete from bloglist where id = ${id}`)
    }
}

module.exports = blogs