Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    circular: true,
    showOpenCvText: false,
    showWeChatText: false,
    showFangKaModal: false,
    showFeiFangKaModal: false,
    imgUrls: [
      "../../img/slide_1.jpg",
      "../../img/slide_2.jpg",
      "../../img/slide_3.jpg"
    ]
  },
  touchOpenCV: function(){
    this.setData({
      showOpenCvText: this.data.showOpenCvText ? false : true,
    });
  },
  touchWeChat: function(){
    this.setData({
      showWeChatText: this.data.showWeChatText ? false : true,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
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

  /**弹出框蒙层截断touchmove事件*/
  preventTouchMove: function () {
  },
  /**隐藏模态对话框*/
  hideModal: function () {
    this.setData({
      showFeiFangKaModal: false,
      showFangKaModal: false
    });
  },
  feiFangKa: function(){
    console.log("feifangka");
    this.setData({
      showFeiFangKaModal: true
    })
  },
  fangKa: function(){
    console.log("fangka");
    this.setData({
      showFangKaModal: true
    })
  }
})