// home.wxml

var app = getApp();
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    swiper: {
      imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        'http://imgsrc.baidu.com/baike/pic/item/d01373f082025aaff92dd92bfaedab64034f1a36.jpg'
      ],
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000
    }
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: 'user'
    })
  },
  tapPanel:function(){
    console.log("点击了评论");
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
