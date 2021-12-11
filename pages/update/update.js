// pages/update/update.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //返回首界面

  return:function(){
    wx.redirectTo({
      url: '/pages/index/index'
    })
  },

  //通过账户查询信息
  submit: function(e) {
  //    console.log(e.detail.value)
    wx.request({
      url: 'http://localhost/jiaoping/user/SelectUserByUserID.php',
      data: {
        userid: e.detail.value.user
      },
      success: function(res) {
   //     console.log(res);
        //判断账户是否存在
        if(res.data==null){
          wx.showToast({
            title: '账户不存在',
            icon: 'none',
            duration: 1500,
          })
        }
        else{
       // 判断账原始密码
        if (e.detail.value.password == res.data.password) {
          //判断两次密码是否一致
          if (e.detail.value.newpassword == e.detail.value.newpassword2) {
            //修改密码
            wx.request({
              url: 'http://localhost/jiaoping/login/UpdatePassword.php',
              data: {
                userid: e.detail.value.user,
                newpassword: e.detail.value.newpassword
              },
              success: function(r) {
           //     console.log(r)
                //判断成功后跳转{
                if (r.data == "密码修改成功") {
                  wx.showToast({
                    title: '密码修改成功',
                    icon: 'none',
                    duration: 1500,
                    success: function(s) {
                      if (res.data.jurisdiction == 1) {
                        wx.redirectTo({
                          url: '/pages/guanli/guanli?id=' + e.detail.value.user,
                        })
                      } else {
                        wx.redirectTo({
                          url: '/pages/xz/xz',
                        })
                      }
                    },
                  })
                }
              },
              fail: function(r) {},
              complete: function(r) {},
            })
          } else {
            wx.showToast({
              title: '两次密码输入有误',
              icon: 'none',
              duration: 1500,
              mask: true,
            })
          }
        } else {
          wx.showToast({
            title: '原始密码与账户信息不符',
            icon: 'none',
            duration: 1500,
          })
        }
        }

      },
      fail: function(res) {
      },
      complete: function(res) {
      },
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // wx.request({
    //   url: 'http://localhost/jiaoping/user/SelectUserByUserID.php',
    //   data: '',
    //   header: {},
    //   method: 'GET',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: function(res) {},
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })
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