// pages/jpj/jpj.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subject_list: null,
    class_list: null,
    tt: 0,
    class_name: null
  },

  xzclass: function (e) {
    var that = this;
    console.log(e)
    that.setData({
      tt: 0,
      class_name: e.currentTarget.dataset.classname
    })
  },

  xz: function () {
    var that = this;
    that.setData({
      tt: 1
    })

  },
  submit: function (e) {
    var that = this;
    console.log(e)
    if (!e.detail.value.score0 || !e.detail.value.score1 || !e.detail.value.score2 || !e.detail.value.score3 || !e.detail.value.score4 || !e.detail.value.score5 || !e.detail.value.score6 || !e.detail.value.score7 || !e.detail.value.score8 || !e.detail.value.score9) {
      wx.showToast({
        title: '请将问题答全',
        icon: 'none',
        duration: 2000,
      })
    } else {
      wx.navigateTo({
        url: '/pages/teacher/teacher?score0=' + e.detail.value.score0 + '&score1=' + e.detail.value.score1 + '&score2=' + e.detail.value.score2 + '&score3=' + e.detail.value.score3 + '&score4=' + e.detail.value.score4 + '&score5=' + e.detail.value.score5 + '&score6=' + e.detail.value.score6 + '&score7=' + e.detail.value.score7 + '&score8=' + e.detail.value.score8 + '&score9=' + e.detail.value.score9 + '&classname=' + that.data.class_name,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options) //collegeid
    var that = this;
    //班级
    wx.request({
      url: 'http://localhost/jiaoping/user/SelectUserBycollegeID.php',
      data: {
        collegeID: options.collegeid
      },
      success: function (res) {
        console.log(res)
        that.setData({
          class_list: res.data
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
    //题
    wx.request({
      url: 'http://localhost/jiaoping/SelectAllSubject.php',
      data: {
        type: 1
      },
      success: function (res) {
        console.log(res)
        that.setData({
          subject_list: res.data
        })
      },
      fail: function (res) { },
      complete: function (res) { },
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