var words = require('../../assets/zen-list');

Page({
  data: {
    windowHeight: 600,
    wordList: [],
    swiperCurrent: 0,
    wordCurrent: 0
  },

  onLoad(query) {
    if (query && query.current) {
      this.data.wordCurrent = query.current;
    } else {
      this.data.wordCurrent = words.length - 1;
    }

    let res = wx.getSystemInfoSync();
    this.setData({ 
      windowHeight: res.windowHeight - 60,
      swiperCurrent: this.data.wordCurrent,
      wordList: words
    })
  },

  onShareAppMessage(options) {
    return {
      title: '禅の言葉',
      path: '/pages/index/index?current=' + this.data.wordCurrent,
    };
  },

  currentChange(event) {
    this.setData({
      wordCurrent: event.detail.current
    });
  }
})
