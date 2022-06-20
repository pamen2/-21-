// pages/tempera/tempera.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
    tempera:0,
    humidity:0, 
    },

    /**
     * 生命周期函数--监听页面加载
     */
    refresh:function(options)
    {
        var that = this
        wx.request({
          url: 'http://api.heclouds.com/devices/953241740', 
          header:{
            "api-key":"77muqtL3XqRoYMwh5kNxvRyxiK8=" 
          },
          method :"GET",
          success:function(res){
              console.log(res)
           that.setData({
             tempera:res.data.data.datastreams[0].datapoints,
             humidity:res.data.data.datastreams[1].datapoints,
           })    
          }
        })
    },
    dididi:function (options){
        wx.request({
            url: 'http://api.heclouds.com/cmds?device_id=953241740',
            header:{
              'content-type':'application/json',
              "api-key":"77muqtL3XqRoYMwh5kNxvRyxiK8=" 
            },
            method :"POST",
            data:1,
            success(res){
                console.log(res)
            }
          })
    },
    onLoad: function (options) {

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