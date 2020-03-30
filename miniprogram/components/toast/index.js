Component({
  properties: {
    content: String,
    duration: {
      type: Number,
      value: 2000
    }
  },
  data: {
    visible: false
  },
  methods: {
    show (option = {}) {
      const { duration, content } = this.data
      this.setData({
        visible: true,
        content: option.content ? option.content : content,
        duration: option.duration ? option.duration : duration
      })

      if (duration) {
        setTimeout(() => {
          this.hide()
        }, duration)
      }
    },
    hide () {
      this.setData({ visible: false })
    }
  }
})
