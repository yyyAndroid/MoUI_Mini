module.exports = options => `
Component({

    /**
     * 代码复用机制，类似mixins
     **/
    behaviors: [],

    /**
     * 组件接受的外部样式
     **/
    externalClasses: ['mo-class'],

    /**
     * 组件的对外属性
     **/
    properties: {
    },

    /**
     * 组件的内部数据
     **/
    data: {
    },

    /**
     * 组件实例进入页面节点树
     * 注意此时不能调用setData
     **/
    created() {
    },

    /**
     * 组件布局完成后执行
     * 可以获取节点信息
     **/
    ready() {
    },

    /**
     * 组件的方法
     **/
    methods: {
    }
})

`