const sqlClient = require("../tools/index")
const blogs = require("../models/blogs")

module.exports = async (ctx,next) => {
    const {title, name, content} = ctx.request.body
   ctx.body =  await blogs.addBlogs(title,name,content);
}