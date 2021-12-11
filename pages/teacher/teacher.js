// pages/teacher/teacher.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classname: null,
    score0: null,
    score1: null,
    score2: null,
    score3: null,
    score4: null,
    score5: null,
    score6: null,
    score7: null,
    score8: null,
    score9: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options)
    that.setData({
      classname: options.classname,
      score0: parseInt(options.score0),
      score1: parseInt(options.score1),
      score2: parseInt(options.score2),
      score3: parseInt(options.score3),
      score4: parseInt(options.score4),
      score5: parseInt(options.score5),
      score6: parseInt(options.score6),
      score7: parseInt(options.score7),
      score8: parseInt(options.score8),
      score9: parseInt(options.score9),
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})