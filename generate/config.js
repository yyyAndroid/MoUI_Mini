/**
 * 文件根路径
 **/

const path = require('path')

module.exports = {
    page: path.resolve(__dirname, '../src/pages/'),
    component: path.resolve(__dirname, '../src/component/')
}