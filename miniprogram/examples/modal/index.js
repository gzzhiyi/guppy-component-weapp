Page({
  data: {
    visible: false,
    visible2: false,
    title: '',
    content: '',
    type: '',
    actionMode: ''
  },
  onOk() {
    console.log('ok')
    this.setData({
      visible: false,
      visible2: false
    })
  },
  onCancel() {
    console.log('cancel')
  },
  handleShowAlert() {
    this.setData({
      visible: true,
      title: '标题',
      content: '这是一个提示框',
      type: 'alert',
      actionMode: 'horizontal'
    })
  },
  handleShowModal() {
    this.setData({
      visible: true,
      title: '标题',
      content: '这是一个对话框',
      type: 'confirm',
      actionMode: 'horizontal'
    })
  },
  handleShowModal2() {
    this.setData({
      visible: true,
      title: '',
      content: '这是一个无标题对话框',
      type: 'confirm',
      actionMode: 'horizontal'
    })
  },
  handleShowModal3() {
    this.setData({
      visible: true,
      title: '',
      content: '这是一个纵向按钮对话框',
      type: 'confirm',
      actionMode: 'vertical'
    })
  },
  handleShowModal4() {
    this.setData({
      visible2: true,
      title: '',
      content: '自定义对话框内容',
      type: 'confirm',
      actionMode: 'horizontal'
    })
  }
})
