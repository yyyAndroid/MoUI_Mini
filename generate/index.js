const inquirer = require('inquirer')
const generate = require('./generate.js')

inquirer.prompt(
    [{
        type: 'list',
        name: 'fileType',
        choices: ['page', 'component'],
        message: 'select file type',
        default: 'page'
    }, {
        type: 'input',
        name: 'name',
        message: 'input the file name',
        default: 'index'
    }, {
        type: 'list',
        name: 'htmlEngines',
        choices: ['jade', 'wxml'],
        message: 'select html template engines',
        default: 'jade'
    }, {
        type: 'list',
        name: 'cssEngines',
        choices: ['less', 'wxss'],
        message: 'select css template engines',
        default: 'less'
    }]
).then((options) => {
    generate.generateFile(options)
})