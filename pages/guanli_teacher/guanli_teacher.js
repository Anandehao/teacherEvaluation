// pages/guanli_teacher/guanli_teacher.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_list: null,
    collegeid: null
  },
//详情
  xq:function(e){
//    console.log(e)
    wx.navigateTo({
      url: '/pages/teacher_update/teacher_update?id=' + e.currentTarget.dataset.id,
    })
  },

  //添加新用户s
  add: function() {
    wx.navigateTo({
      url: '/pages/teacher_add/teacher_add?college=' + this.data.collegeid,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
//    console.log(options)

    //获取管理员所在院系的用户

    wx.request({
      url: 'http://localhost/jiaoping/user/SelectUserBycollegeID.php',
      data: {
        collegeID: options.id
      },
      success: function(e) {
        console.log(e)
        that.setData({
          user_list: e.data,
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