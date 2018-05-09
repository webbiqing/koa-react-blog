const sqlClient = require("../tools/index")
const blogs = require("../models/blogs")

module.exports = async (ctx,next) => {
    const {title, name, content,category,id} = ctx.request.body
    ctx.body =  await blogs.updateBlog(title,name,content,category,id);
}