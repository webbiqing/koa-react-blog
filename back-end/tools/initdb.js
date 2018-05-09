/**
 * @author wbqing
 */
const fs = require('fs')
const path = require('path')
const config = require('../config')
const Knex = require('knex')

console.log('\n======================================')
console.log('开始初始化数据库...')

// 初始化 SQL 文件路径
const INIT_DB_FILE1 = path.join(__dirname, './bloglist.sql')
const INIT_DB_FILE2 = path.join(__dirname, './category.sql')
const INIT_DB_FILE3 = path.join(__dirname, './user.sql')

const DB = Knex({
    client: 'mysql',
    connection: {
        host: config.mysql.host,
        port: config.mysql.port,
        user: config.mysql.user,
        password: config.mysql.password,
        database: config.mysql.database,
        charset: config.mysql.char,
        multipleStatements: true
    }
})

console.log(`准备读取 SQL 文件：${INIT_DB_FILE1}`)
console.log(`准备读取 SQL 文件：${INIT_DB_FILE2}`)
console.log(`准备读取 SQL 文件：${INIT_DB_FILE3}`)

// 读取 .sql 文件内容
const content1 = fs.readFileSync(INIT_DB_FILE1, 'utf8')
const content2 = fs.readFileSync(INIT_DB_FILE2, 'utf8')
const content3 = fs.readFileSync(INIT_DB_FILE3, 'utf8')

console.log('开始执行 SQL 文件...')

// 执行 .sql 文件内容
DB.raw(content1).then(res => {
    DB.raw(content2).then(res => {
        DB.raw(content3).then(res => {
            console.log('数据库初始化成功！')
            process.exit(0)
        }, err => {
            throw new Error(err)
        })
    }, err => {
        throw new Error(err)
    })
}, err => {
    throw new Error(err)
})
