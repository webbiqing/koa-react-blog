const sqlClient = require("../tools/index")
const blogs = require("../models/blogs")

module.exports = async (ctx,next) => {
   let result =  await blogs.searchBlogs();
   ctx.body = result;
}