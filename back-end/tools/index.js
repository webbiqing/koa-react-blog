const Client = require("mysql-pro");
const config = require("./../config")

const sqlClient = new Client({     
    mysql: config.mysql
}); 

module.exports = sqlClient;