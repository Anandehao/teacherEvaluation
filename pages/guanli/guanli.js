// pages/guanli/guanli.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null
  },
  teacher: function() {
    wx.navigateTo({
      url: '/pages/guanli_teacher/guanli_teacher?id=' + this.data.id,
    })
  },
  class: function() {
    wx.navigateTo({
      url: '/pages/guanli_class/guanli_class?id=' + this.data.id,
    })
  },
  jspj: function() {
    wx.navigateTo({
      url: '/pages/guanli_jspj/guanli_jspj',
    })
  },
  bjpj: function() {
    wx.navigateTo({
      url: '/pages/guanli_bjpj/guanli_bjpj',
    })
  },
  pj: function() {
    wx.navigateTo({
      url: '/pages/guanli_pj/guanli_pj',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  //  console.log(options)
    var that = this;
    //获取管理员所在院系
    wx.request({
      url: 'http://localhost/jiaoping/user/SelectUserByUserID.php ',
      data: {
        userid: options.id
      },
      success: function(res) {
  //      console.log(res)
        that.setData({
          id: res.data.collegeID
        })
      }
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