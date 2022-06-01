<template>
  <view class="question">
    <view class="ml-20 mb-20 mr-20 f-14 pl-5 pr-5 title-box">
      <view
        v-for="(item, index) in questionList"
        :key="item.id"
        class="pt-15 pb-15 title box box-column-center box-around"
        @click="detail(index)"
      >
        <view>{{ index + 1 }}、{{ item.title }}</view>
        <img src="../../static/img/question_jiantou.png" alt="" />
      </view>
    </view>
  </view>
</template>

<script>
import { getQuestion } from "../../api/question";
export default {
  components: {},
  data: () => ({
    questionList: [],
  }),
  computed: {},
  methods: {
    //获取题目
    async getList(tableName) {
      uni.setStorageSync('tableName', tableName);
      let { data } = await getQuestion(tableName);
      this.questionList = data;
    },

    //详情
    detail(idx){
      uni.navigateTo({
        url:`/pages/question/detail/index?listIdx=${idx}`
      })
    }
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad({ title, tableName }) {
    uni.setNavigationBarTitle({
      title: title,
    });
    this.getList(tableName);
  },
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
.title-box {
  background: #fff;
  border-radius: 8rpx;
}
.title {
  border-bottom: 2rpx solid #f5f5f5;
  view {
    width: 90%;
    display: -webkit-box; //谷歌
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1; //显示几行
    overflow: hidden;
  }

  img {
    width: 30rpx;
    height: 30rpx;
  }
}
</style>