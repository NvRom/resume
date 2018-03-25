Page({

  /**
   * 页面的初始数据
   */
  data: {
    showConflationModal: false,
    showBotFrameworkModal: false,
    showMVCModal: false,
    showQnAPairModal: false,
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
      showConflationModal: false,
      showBotFrameworkModal: false,
      showMVCModal: false,
      showQnAPairModal: false, 
    });
  },
  /*点击conflation tool*/
  clickConflationTool: function(){
    this.setData({
      showConflationModal: true
    })
  },
  /*点击bot framework*/
  clickBotFramework: function () {
    this.setData({
      showBotFrameworkModal: true
    })
  },
  /*点击MVC*/
  clickMVC: function () {
    this.setData({
      showMVCModal: true
    })
  },
  /*点击QnAPair*/
  clickQnAPair: function () {
    this.setData({
      showQnAPairModal: true
    })
  }
})