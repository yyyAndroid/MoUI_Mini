/**
 * 索引器项
 */

export default Component({
  properties: {
    // 显示在header文字
    name: {
      type: String,
      value: ''
    },
    // 显示在fixed上
    key: {
      type: String,
      value: ''
    },
    // herder文字颜色
    color: {
      type: String,
      value: ''
    }
  },
  relations: {
    '../indexer/index': {
      type: 'parent'
    }
  },
  data: {
    // ele高度
    height: 0,
    // 距顶距离
    top: 0,
    // 
    name: '',
    //
    key: ''
  },
  methods: {
    // 获取节点DOM信息
    getElementQuery() {
      let className = '.indexer-item'
      let query = wx.createSelectorQuery().in(this)
      query.select(className).boundingClientRect((res) => {
        this.setData({
          height: res.height,
          top: res.top,
          name: this.data.name,
          key: this.data.key
        })
      }).exec()
    }
  }
})