//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    windowHeight: 600,
  },

  onLoad() {
    let res = wx.getSystemInfoSync();
    this.setData({ windowHeight: res.windowHeight - 60 })
  }
})
