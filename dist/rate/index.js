Component({
  properties: {
    count: {
      type: Number,
      value: 5
    },
    value: {
      type: Number,
      value: 0
    }
  },
  methods: {
    handleChange(e) {
      const { value } = e.currentTarget.dataset
      this.triggerEvent('change', { value })
    }
  }
})
