// pages/camera/camera.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      motivate:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F44%2F27%2F5813b68183ac9_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656773557&t=5276adf2e9542f611594dddc7f777ae0',
      time:"0000-00-00",
      number:0,
      index:"",
    },
 
    onLoad:function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    //没有arduino端尝试上传图片，因此未验证有效性
    refresh:function (options) {
        var that=this
        wx.request({
            url: 'http://api.heclouds.com/devices/953241740', 
            header:{
              "api-key":"77muqtL3XqRoYMwh5kNxvRyxiK8=" 
            },
            method :"GET",
            success:function(res){
             that.setData({
               index:res.data.data.datastreams[0].index
             })    
            }
          })
        wx.request({
            url: 'http://api.heclouds.com/bindata/'+this.data.index,
            header:{
              'api-key': '77muqtL3XqRoYMwh5kNxvRyxiK8='
            },
            method:"GET",
            responseType: 'arraybuffer',
            success: function (res) {
              const base64=wx.wx.arrayBufferToBase64(arrayBuffer)(res.data)        
              that.setData({
               motivate:'data:image/png;base64/,'+base64
              });
            }
          })
    },
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