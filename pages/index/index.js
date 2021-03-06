//index.js
//获取应用实例
var app = getApp();
var helloData = {
  name: 'WeChat'
};

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    name: helloData.name
  },
  bindViewTap: function(){
    wx.navigateTo({
      url: '../details/details'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onShareAppMessage: function () {
   // return custom share data when user share.
   return {
      title: '自定义分享标题',
      path: '/page/user?id=123'
    }
  }
})
