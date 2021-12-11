Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0 //tab切换
  },

  //修改密码
  update:function(){
   wx.redirectTo({
     url: '/pages/update/update',
   })
  },

  /** 
   * 滑动切换tab 
   */
  bindChange: function(e) {

    var that = this;
    that.setData({
      currentTab: e.detail.current
    })

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  //教师登录
  t_login: function(e) {
  //  console.log(e.detail.value);
    wx.request({
      url: 'http://localhost/jiaoping/login/login.php',
      data: {
        password: e.detail.value.password,
        userid: e.detail.value.username,
      },
      success: function(res) {
        console.log(res)
        if (res.data == "普通用户登录成功") {
          wx.redirectTo({
            url: '/pages/xz/xz?id='+e.detail.value.username,
          })
        }
        else {
          wx.showToast({
            title: '账户与密码不符',
            icon: 'none',
            duration: 1500,
            mask: true,
          })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })

  },


  //管理员登录
  a_login: function(e) {
 //   console.log(e);
    wx.request({
      url: 'http://localhost/jiaoping/login/login.php',
      data: {
        password: e.detail.value.password,
        userid: e.detail.value.username,
      },
      success: function (res) {
     //   console.log(res)
        if (res.data == "管理员登录成功") {
       wx.redirectTo({
         url: '/pages/guanli/guanli?id=' + e.detail.value.username,
       })
        }
       else{
         wx.showToast({
           title: '账户与密码不符',
           icon: 'none',
           duration: 1500,
           mask: true,
         })
       }
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
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