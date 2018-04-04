/**
 * @file 转义输入的字符
 */
const mysql = require('mysql')

function escape(template, ...subs) {
    let result = ''
    for (let i = 0; i < subs.length; i++) {
        result += template[i]
        result += mysql.escape(subs[i])
    }
    result += template[template.length - 1]
    return result
}

module.exports = escape;