Component({
  externalClasses: ['my-class'],
  properties: {
    iClass: {
      type: String,
      value: ''
    },
    visible: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: ''
    },
    type: {
      type: String,
      value: 'confirm'
    },
    okText: {
      type: String,
      value: '确认'
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    actionMode: {
      type: String,
      value: 'horizontal'
    }
  },
  methods: {
    handleOk () {
      this.triggerEvent('ok')
    },
    handleCancel () {
      this.triggerEvent('cancel')
      this.hide()
    },
    show () {
      this.setData({ visible: true })
    },
    hide () {
      this.setData({ visible: false })
    }
  }
})
