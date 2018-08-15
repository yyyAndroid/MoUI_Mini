Page({
    data: {},
    onLoad() {},
    onShow() {
        console.log('home show')
    },
    tap(e) {
        wx.T.setLocale('cn')

        setTimeout(() => {
            wx.navigateTo({
                url: '/pages/log/log'
            })
        }, 500);
    }
})