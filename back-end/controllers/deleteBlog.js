const sqlClient = require("../tools/index")
const blogs = require("../models/blogs")

module.exports = async (ctx,next) => {
    const {id} =  ctx.request.body
    let result =  await blogs.deleteBlog(id);
    ctx.body = '';
}