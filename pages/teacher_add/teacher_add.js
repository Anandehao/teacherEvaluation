// pages/teacher_add/teacher_add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex: ["男", "女"],
    office: null,
    collegeid: null,
    offic: null, //选择后教研室名
    oice: null,
    office_array: null, //所有数组
    officeid: null
  },


  //表单提取信息
  submit: function(e) {
    var that=this;
    console.log(e.detail.value)
    wx.request({
      url: 'http://localhost/jiaoping/user/AddUser.php',
      data: {
        userid: e.detail.value.id,
        name: e.detail.value.name,
        sex: e.detail.value.sex,
        collegeID: that.data.collegeid,
        officeID: that.data.officeid,
        jurisdiction: 2
      },
      success: function(res) {
        console.log(res)
        if (res.data == "成功") {
          wx.redirectTo({
            url: '/pages/guanli_teacher/guanli_teacher?id=' + that.data.collegeid,
            success: function(res) {
              wx.showToast({
                title: '添加成功',
                icon: 'none',
                duration: 2000,
              })
            },
            fail: function(res) {},
            complete: function(res) {},
          })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  //选择男女
  change: function(e) {
    var that = this;
    //   console.log(e.detail.value)
    var num = e.detail.value;
    if (num == 1) {
      that.setData({
        newsex: "女"
      })
    } else {
      that.setData({
        newsex: "男"
      })
    }
  },
  //选择教研室
  changa: function(e) {
    var that = this;
    console.log(e)
    var j = e.detail.value //下标
    var office = that.data.office_array[e.detail.value]
    console.log(office);
    that.setData({
      officeid: office.officeID,
      offic: office.officeName
    })
    var off = that.data.office
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    console.log(options)
    //查教评室
    wx.request({
      url: 'http://localhost/jiaoping/user/SelectOfficeBycollegeID.php',
      data: {
        collegeID: options.college
      },
      success: function(res) {
        //     console.log(res.data)
        var off = res.data;

        var array = [];
        for (var i = 0; i < off.length; i++) {
          var ice = off[i].officeName;
          array.push(ice);
        }
        //      console.log(array)
        that.setData({
          office: array,
          oice: off,
          collegeid: options.college,
          office_array: res.data
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