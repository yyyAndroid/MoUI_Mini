/**
 * 索引器
 */

export default Component({

  properties: {
    // 索引字体颜色
    color: {
      type: String,
      value: ''
    }
  },

  relations: {
    '../indexer-item/index': {
      type: 'child',
      linked() {
        this._updateChildData()
      },
      linkChanged() {
        this._updateChildData()
      },
      unlinked() {
        this._updateChildData()
      }
    }
  },

  data: {
    // 滚动位置
    scrollTop: 0,
    // 时间戳
    timer: null,
    // 索引数组
    fixedData: [],
    // 当前索引值
    currentName: '',
    // 索引视图距顶
    fixedTop: 0,
    // 索引的高度 (px)
    indexHeight: 16,
    // tooltip时候显示
    isTouches: false,

  },

  methods: {

    /**
     * 页面事件
     */
    // 索引点击事件
    fixedClick(e) {
      let index = e.currentTarget.dataset.index
      this._setScrollTo(index)
    },

    // 滑动索引
    touchMove(e) {
      let touch = e.touches[0] || {}
      let pageY = touch.pageY
      // 计算滑动到的绝对距离
      let absDistance = pageY - this.data.fixedTop
      let index = Math.ceil(absDistance / this.data.indexHeight) - 1
      this._setScrollTo(index)
    },
    // 停止活动索引
    touchEnd() {
      setTimeout(() => {
        this.setData({
          isTouches: false
        })
      }, 300)
    },

    /**
     * 数据处理
     */
    // 子节点数据更新
    // 函数节流 防止页面多次重复渲染
    _updateChildData() {

      if (this.data.timer) {
        clearTimeout(this.data.timer)
        this.data.timer = null
      }
      
      this.data.timer = setTimeout(() => {
        let childs = this._getChilds()
        if (childs && childs.length) {
          let fixedArray = []
          for (let child of childs) {
            if (child.data.key && this.data.fixedData.indexOf(child.data.key) === -1) {
              fixedArray.push(child.data.key)
              child.getElementQuery()
            }
          }
          this.setData({
            fixedData: fixedArray
          })
          this._setFixedTouchValue()
        }
      }, 100)
    },

    // 获取关联子节点
    _getChilds() {
      return this.getRelationNodes('../indexer-item/index')
    },

    // 设置索引视图的顶部高度
    _setFixedTouchValue() {
      let className = '.indexer-fixed'
      const query = wx.createSelectorQuery().in(this);
        query.select(className).boundingClientRect((res) => {
          this.setData({
            fixedTop: res.top
          })
      }).exec()
    },

    // 滚动
    _setScrollTo(index) {
      let childs = this._getChilds()
      let currentEle = childs[index]
      this.setData({
        currentName: currentEle.data.key,
        scrollTop: currentEle.data.top,
        isTouches: true
      })
    }

  }
})