Component({
  properties: {
    current: {
      type: [String, Number],
      value: []
    },
    items: {
      type: Array,
      value: []
    },
    mode: {
      type: String,
      value: 'horizontal'
    },
    type: {
      type: String,
      value: 'type-1'
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
