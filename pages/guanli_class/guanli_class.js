// pages/guanli_class/guanli_class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collegeid: null,
    ff: 0,
    tt: 1,
    tt1: 0,
    class_list: null,
    ff1:1
  },
  //添加
  submit: function(e) {
    var that = this;
    console.log(e.detail.value.class)
    console.log(that.data.collegeid)
    var id = wx.getStorageSync("id")
    var object = { id: id };
    wx.request({
      url: 'http://localhost/jiaoping/class/AddClass.php',
      data: {
        collegeid: that.data.collegeid,
        classname: e.detail.value.class
      },
      success: function(res) {
        console.log(res)
        if (res.data == "成功") {
          that.onLoad(object);
          that.setData({
            ff: 0
          })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  update: function() {
    var that = this;
    that.setData({
      tt: 0,
      tt1: 1
    })
  },

  ok: function() {
    var that = this;
    that.setData({
      tt: 1,
      tt1: 0
    })
  },
  //添加
  create: function() {
    var that = this;
    that.setData({
      ff: 1,
      ff1:0
    })
  },
//取消
  cancel: function () {
    var that = this;
    that.setData({
      ff: 0,
      ff1:1
    })
  },
  //删除
  delete: function(e) {

     var id =  wx.getStorageSync("id")
    var object = { id: id};
    
    var that = this;
    //console.log(e)
    wx.request({
      url: 'http://localhost/jiaoping/class/DeleteClassByClassid.php',
      data: {
        classid: e.currentTarget.dataset.id
      },
      success: function(res) {
        console.log(res)
        that.onLoad(object);
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    console.log(options)
   wx.setStorageSync("id", options.id)
    
    wx.request({
      url: 'http://localhost/jiaoping/class/SelectClassByCollegeID.php',
      data: {
        collegeid:options.id
      },
      success: function(res) {
        console.log(res)
        that.setData({
          class_list: res.data,
          collegeid: options.id
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})