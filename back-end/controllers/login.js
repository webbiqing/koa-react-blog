const sqlClient = require("../tools/index")
const login = require("../models/login")

module.exports = async (ctx,next) => {
    const {username,pwd} = ctx.request.query;
    let data = await login( username,pwd );
    if(data[0].countnum === 0){
        ctx.body = {
            data:909
        }
    }else if(data[0].countnum === 1){
        ctx.body = {
            data:606
        }
    }
}