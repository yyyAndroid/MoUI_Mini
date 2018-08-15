/**
 * 国际化
 **/

//- 记录切换语言
let changeLocale = ''

/** 国际化类 **/
class DiveI18n {

    // 构造方法
    constructor(objc = {}) {
        changeLocale = objc.locale
        this.locale = objc.locale
        this.messages = objc.messages
        _mountPage(this.locale, this.messages)
    }

    // 切换语言
    setLocale(lang) {
        changeLocale = lang
        let curPage = _getCurrentPage()
        curPage.$setLocale(lang)
    }
}


/** 私有方法 **/

//- 获取当前页面
function _getCurrentPage() {
    let stack = getCurrentPages()
    let curPage = stack[stack.length - 1]
    return curPage
}

//- 扩展页面
function _mountPage(locale, messages) {

    if (!messages && !locale)
        return
    // 获取指定语言
    const lang = messages[locale]

    // 保存原来Page
    const originalPage = Page
    Page = (opt) => {

        // 将语言库信息合并页面data中
        if (opt.data) {
            opt.data = Object.assign(opt.data, {
                $locale: locale,
                $lang: lang
            })
        } else {
            opt.data = {
                $locale: locale,
                $lang: lang
            }
        }

        // mixins 判断语言切换
        let onShow = opt.onShow
        opt.onShow = (options) => {
            let curPage = _getCurrentPage()
            if (changeLocale !== curPage.data.$locale) {
                curPage.$setLocale(changeLocale)
            }
            onShow.apply(this, options)
        }

        // 向页面扩展切换语言方法
        opt.$setLocale = (lang) => {
            let curPage = _getCurrentPage()
            curPage.setData({
                $locale: lang,
                $lang: messages[lang]
            })
        }

        return originalPage(opt)
    }
}

export default DiveI18n