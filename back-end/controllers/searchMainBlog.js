const sqlClient = require("../tools/index")
const blogs = require("../models/blogs")

module.exports = async (ctx,next) => {
    const {id} = ctx.query
    let result =  await blogs.searchMainBlog(id);
    console.log(result[0].date)
    ctx.body = result[0];
}