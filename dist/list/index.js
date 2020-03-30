Component({
  externalClasses: ['my-class'],
  relations: {
    '../listItem/index': {
      type: 'child',
      linked () {
        this._updateIsLast()
      },
      linkChanged () {
        this._updateIsLast()
      },
      unlinked () {
        this._updateIsLast()
      }
    }
  },
  methods: {
    _updateIsLast () {
      const items = this.getRelationNodes('../listItem/index')
      const size = items.length

      if (size > 0) {
        const lastIndex = size - 1
        items.forEach((item, index) => {
          item.updateIsLast(index === lastIndex)
        })
      }
    }
  }
})
