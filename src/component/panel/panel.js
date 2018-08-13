Component({

    /**
     * 组件接受的外部样式
     **/
    externalClasses: ['mo-class'],

    /**
     * 组件的对外属性
     **/
    properties: {
        // 标题
        title: {
            type: String,
            value: ''
        },

        // 顶部距离
        isTop: {
            type: Boolean,
            value: false
        },

        // 边框
        isBorder: {
            type: Boolean,
            value: false
        }
    }
})