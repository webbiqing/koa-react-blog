const sqlClient = require("../tools/index")
const blogs = require("../models/blogs")

module.exports = async (ctx,next) => {
   const {category} = ctx.query
   let result =  await blogs.searchBlogs(category);
   ctx.body = result;
}