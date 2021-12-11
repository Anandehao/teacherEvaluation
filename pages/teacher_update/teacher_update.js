// pages/teacher_update/teacher_update.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     collegeid:null,
     newsex:null,
     name:null,
     sex:["男","女"],
     password:null,
     userid:null,
     officeid:null,
     office:null,
     oice:null,
     office_array:null,
  },
  //修改
  submit:function(e){
    var that=this;
    console.log(that.data.officeid)
    wx.request({
      url: 'http://localhost/jiaoping/user/UpdateAllUser.php',
      data: {
        name:e.detail.value.name,
        sex: e.detail.value.sex,
        userid:that.data.userid,
        newuserid: e.detail.value.id,
        officeid:that.data.officeid,
        password: e.detail.value.password
      },
      success: function(res) {
        console.log(res)
        //跳回上一界面
        if(res.data=="成功"){
          wx.redirectTo({
            url: '/pages/guanli_teacher/guanli_teacher?id='+that.data.collegeid,
          })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  //删除
  sc:function(e){
    var that=this;
//  console.log(e)
  wx.request({
    url: 'http://localhost/jiaoping/user/DeleteUserByUserID.php',
    data: {
      userid:e.currentTarget.dataset.userid
    },
    success: function(res) {
//      console.log(res)
      if(res.data=="成功"){
        wx.redirectTo({
          url: '/pages/guanli_teacher/guanli_teacher?id=' + that.data.collegeid,
        })
      }
    },
    fail: function(res) {},
    complete: function(res) {},
  })
  },
  //选择男女
  change: function (e) {
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
  changa: function (e) {
    var that = this;
//    console.log(e)
    var j = e.detail.value //下标
    var office = that.data.office_array[e.detail.value]
//    console.log(office);
    that.setData({
      officeid: office.officeID,
      offic: office.officeName
    })
    var off = that.data.office
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
//    console.log(options)
    wx.request({
      url: 'http://localhost/jiaoping/user/SelectUserByUserID.php',
      data: {
      userid:options.id
      },
      success: function(res) {
 //       console.log(res)
        that.setData({
          officeid:res.data.officeID,
        })
        //查教研室
        wx.request({
          url: 'http://localhost/jiaoping/user/SelectOfficeBycollegeID.php',
          data: {
            collegeID:res.data.collegeID
          },
          success: function(e) {
 //           console.log(e)
            var off = e.data;
            var array = [];
            for (var i = 0; i < off.length; i++) {
              var ice = off[i].officeName;
              array.push(ice);
            }
                
            that.setData({
              collegeid: res.data.collegeID,
              name: res.data.name,
              newsex: res.data.sex,
              password: res.data.password,
              userid: res.data.userID,
              office: array,
              oice: off,
              office_array: e.data
            })
          },
          fail: function(res) {},
          complete: function(res) {},
        })
       
       wx.request({
         url: 'http://localhost/jiaoping/office/SelectOfficeByOfficeID.php',
         data: {
           officeid:res.data.officeID
         },
         success: function(r) {
 //          console.log(r)
           that.setData({
             offic:r.data
           })
         },
         fail: function(res) {},
         complete: function(res) {},
       })
      },
      fail: function(res) {},
      complete: function(res) {},
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