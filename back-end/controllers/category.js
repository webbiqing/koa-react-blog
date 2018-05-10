const sqlClient = require("../tools/index")
const category = require("../models/category")

module.exports = async (ctx,next) => {
   let result =  await category.searchCategory();
   ctx.body = result;
}