import { cities } from '../../assets/data/city'

Page({

    /**
     * 页面的初始数据
     */
    data: {
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.handleCities()
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
    },


    /**
     * 页面事件
     */
    cityClick(e) {
        let item = e.currentTarget.dataset.item
        console.log(item)
    },

    /**
     * 数据处理
     */
    handleCities() {
        let storeCities = []
        let words = ['当前', '热门', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        for (let word of words) {
            let name = ''
            let list = []
            if (word === '当前') {
                name = '当前定位城市'
                list = [{
                    name: '上海',
                    key: 'S'
                }]
            }
            if (word === '热门') {
                name = '热门城市'
            }
            storeCities.push({
                name: name ? name : word,
                key: word,
                list: list
            })
        }

        for (let city of cities) {
            let firstName = city.pinyin.substring(0, 1)
            // 热门城市
            if (city.hot) {
                let hotIndex = words.indexOf('热门')
                storeCities[hotIndex].list.push({
                    name: city.name,
                    key: firstName
                })
            }
            let index = words.indexOf(firstName)
            storeCities[index].list.push({
                name: city.name,
                key: firstName
            })
        }
        this.setData({
            cities: storeCities
        })
    }
})

