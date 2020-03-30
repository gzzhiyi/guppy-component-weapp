Component({
  externalClasses: ['my-class'],
  relations: {
    '../list/index': {
      type: 'parent'
    }
  },
  options: {
    multipleSlots: true
  },
  properties: {
    title: {
      type: String,
      value: ''
    },
    desc: {
      type: String,
      value: ''
    },
    value: {
      type: String,
      value: ''
    },
    url: {
      type: String,
      value: ''
    }
  },
  data: {
    isLast: true
  },
  methods: {
    handleClick () {
      this.triggerEvent('click')
      if (this.data.url) {
        wx.navigateTo({ url: this.data.url })
      }
    },
    updateIsLast(val) {
      this.setData({ isLast: val })
    }
  }
})
