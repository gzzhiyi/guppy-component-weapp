import { $Toast } from '../../components/base/index'

Page({
  handleShowToast1() {
    $Toast({
      content: '我是一个Toast',
      duration: 1000
    })
  },
  handleShowToast2() {
    $Toast({
      selector: '#toast2',
      duration: 5000
    })
  }
})