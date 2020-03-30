Page({
  data: {
    current: ['c'],
    items: [
      { title: '广州', value: 'a' },
      { title: '深圳', value: 'b' },
      { title: '珠海', value: 'c' },
      { title: '汕头', value: 'd' },
      { title: '佛山', value: 'e' },
      { title: '韶关', value: 'f' },
      { title: '呼和浩特', value: '02' },
      { title: '平顶山', value: '01' },
      { title: '哈尔滨', value: '03' }
    ],
    mode: 'horizontal',
    type: 'type-1'
  },
  handleClear() {
    this.setData({ current: [] })
  },
  handleChangeMode() {
    if (this.data.mode === 'horizontal') {
      this.setData({ mode: 'vertical' })
    } else {
      this.setData({ mode: 'horizontal' })
    }
  },
  onChange(e) {
    this.setData({
      current: e.detail.value
    })
  }
})
