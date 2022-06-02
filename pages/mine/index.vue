<template>
  <div class="mine">
    <view class="box box-center mine-header pt-15 pb-15" @click="getUser">
      <img
        :src="portrait"
        alt=""
        class="width-40 height-40 mr-30"
      />
      <view class="ml-30">登录</view>
    </view>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
	portrait:'../../static/tabber/mine.png'
  }),
  computed: {},
  methods: {
    getUser() {
		this.$getUser();
    },
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() {},
  // 页面周期函数--监听页面初次渲染完成
  onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {},
  // 页面周期函数--监听页面隐藏
  onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload() {},
  // 页面处理函数--监听用户下拉动作
  // onPullDownRefresh() { uni.stopPullDownRefresh(); },
  // 页面处理函数--监听用户上拉触底
  // onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  // onPageScroll(event) {},
  // 页面处理函数--用户点击右上角分享
  // onShareAppMessage(options) {},
};
</script>

<style scoped lang='scss'>
.mine-header{
  background: #fff;
}
</style>