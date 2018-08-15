import DiveI18n from './DiveI18n'
import cn from './lang/cn/index'
import en from './lang/en/index'

// 创建类 & 挂载到wx上
wx.T = new DiveI18n({
    locale: 'en',
    messages: {
        ...cn,
        ...en
    }
})