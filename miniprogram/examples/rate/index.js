Page({
  data: {
    value: 1
  },
  handleChange(e) {
    this.setData({
      value: e.detail.value
    })
  }
})
