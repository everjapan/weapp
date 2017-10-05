var words = require('../../assets/zen-list');

Page({
  data: {
    windowHeight: 600,
    wordList: [],
  },

  onLoad() {
    let res = wx.getSystemInfoSync();
    this.setData({ windowHeight: res.windowHeight - 60 })

    console.log(words);
    this.setData({ wordList: words })
  }
})
