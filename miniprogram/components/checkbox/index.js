Component({
  properties: {
    current: {
      type: Array,
      value: []
    },
    items: {
      type: Array,
      value: []
    },
    mode: {
      type: String,
      value: 'horizontal'
    }
  },
  methods: {
    handleChange(e) {
      this.triggerEvent('change', {
        value: e.detail.value
      })
    }
  }
})
