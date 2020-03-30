Component({
  externalClasses: ['my-class'],
  properties: {
    type: {
      type: String,
      value: 'default'
    },
    long: {
      type: Boolean,
      value: false
    },
    inline: {
      type: Boolean,
      value: false
    },
    size: {
      type: String,
      value: 'default'
    },
    disabled: {
      type: Boolean,
      value: false
    },
    openType: String,
    appParameter: String,
    sessionFrom: String,
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: Boolean
  },
  methods: {
    handleTap () {
      if (this.data.disabled) {
        return false
      }
      this.triggerEvent('click')
    },
    bindgetuserinfo({ detail = {} } = {}) {
      this.triggerEvent('getuserinfo', detail)
    },
    bindcontact({ detail = {} } = {}) {
      this.triggerEvent('contact', detail)
    },
    bindgetphonenumber({ detail = {} } = {}) {
      this.triggerEvent('getphonenumber', detail)
    },
    binderror({ detail = {} } = {}) {
      this.triggerEvent('error', detail)
    }
  }
})
