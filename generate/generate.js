/**
 * 生成文件
 **/

const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')
const color = require('cli-color')
const process = require('process')
const config = require('./config.js')

const generateFile = (options) => {

    const fileRoot = config[options.fileType]
    let jsTemplate = null
    let jsonTemplate = null

    // 根据文件类别 获取差异模版
    if (options.fileType === 'page') {
        jsTemplate = require('./template/pageJS.js')
        jsonTemplate = require('./template/pageJSON.js')
        // 在app.json中写入配置
        writePagePathToApp(options.name)
    } else if (options.fileType === 'component') {
        jsTemplate = require('./template/componentJS.js')
        jsonTemplate = require('./template/componentJSON.js')
    } else {
        console.log(color.red('file type that does not exist'))
        process.exit()
    }

    /** 生成文件 **/
    // 创建文件目录
    const filePath = path.resolve(fileRoot, options.name)
    fs.mkdirSync(filePath)

    // 创建 js && json 文件
    const js = `${filePath}/${options.name}.js`
    const json = `${filePath}/${options.name}.json`
    writeContentTofile(js, jsTemplate(options))
    writeContentTofile(json, jsonTemplate(options))

    if (options.htmlEngines === 'jade') {
        const jadeTemplate = require('./template/jade.js')
        const jade = `${filePath}/${options.name}.jade`
        writeContentTofile(jade, jadeTemplate(options))
    }
    if (options.htmlEngines === 'wxml') {
        const wxmlTemplate = require('./template/wxml.js')
        const wxml = `${filePath}/${options.name}.wxml`
        writeContentTofile(wxml, wxmlTemplate(options))
    }
    if (options.cssEngines === 'less') {
        const lessTemplate = require('./template/less.js')
        const less = `${filePath}/${options.name}.less`
        writeContentTofile(less, lessTemplate(options))
    }
    if (options.cssEngines === 'wxss') {
        const wxssTemplate = require('./template/wxss.js')
        const wxss = `${filePath}/${options.name}.less`
        writeContentTofile(wxss, wxssTemplate(options))
    }
}

/** 将模版内容写入对应文件 **/
function writeContentTofile(file, template) {
    fs.writeFileSync(
        file,
        template,
        (error) => {
            if (error) {
                console.log(error)
                process.exit()
            }
            console.log(color.green(`${name} file create success !!!`))
        }
    )
}

/** 将页面路径写入到app中 **/
function writePagePathToApp(fileName) {
    const app = path.resolve(__dirname, '../src/app.json')
    const content = fs.readFileSync(app, 'utf8')
    const temp = content.split('// label')
    const results = `${temp[0].trim()},
        "pages/${fileName}/${fileName}"
        // label${temp[1]}`
    fs.writeFileSync(app, results)
}

/** 对外暴露接口 **/
module.exports = {
    generateFile
}