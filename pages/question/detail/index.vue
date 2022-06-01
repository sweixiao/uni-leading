<template>
  <view class="detail ml-10 mr-10 f-14">
    <view
      v-html="questionList[questionListIdx].title"
      class="p-10 radius-4"
      style="font-weight: 600"
    ></view>
    <view class="mt-10 radius-4" style="line-height: 40rpx">
      <view class="box box-column-center pt-10">
        <!-- <img src="" alt=""  class="width-15 height-15"/> -->
        <view style="font-weight: 600" class="ml-15">参考解析</view>
      </view>
      <view v-html="questionList[questionListIdx].content" class="p-10"></view>
    </view>

    <view class="bottom_btn box full-width box-around pt-20 pb-20">
      <view :class="questionListIdx == 0 ? 'gray' : 'blue'" @click="last"
        >上一题</view
      >
      <view
        :class="
          questionListIdx + 1 == this.questionList.length ? 'gray' : 'blue'
        "
        @click="next"
        >下一题</view
      >
    </view>
    <u-toast ref="uToast"></u-toast>
  </view>
</template>

<script>
import { getQuestion } from "../../../api/question";
export default {
  components: {
    
  },
  data: () => ({
    questionList: [],
    questionListIdx: 0,
  }),
  computed: {},
  methods: {
    last() {
      if (this.questionListIdx == 0) {
       return this.$refs.uToast.show({
          type: "default",
          icon: false,
          message: "已经是第一道题",
          iconUrl: "https://cdn.uviewui.com/uview/demo/toast/error.png",
        });
      }
      this.questionListIdx -= 1;
      uni.setNavigationBarTitle({
        title: `${this.questionListIdx + 1}/${this.questionList.length}`,
      });
    },
    next() {
      if (this.questionListIdx + 1 == this.questionList.length) {
        return this.$refs.uToast.show({
          type: "default",
          icon: false,
          message: "已经是最后一道题",
          iconUrl: "https://cdn.uviewui.com/uview/demo/toast/error.png",
        });
      }
      this.questionListIdx += 1;
      uni.setNavigationBarTitle({
        title: `${this.questionListIdx + 1}/${this.questionList.length}`,
      });
    },
  },
  watch: {},

  // 页面周期函数--监听页面加载
  async onLoad({ listIdx = 0 }) {
    //获取题目
    let tableName = uni.getStorageSync("tableName");
    let { data } = await getQuestion(tableName);
    this.questionList = data;
    this.questionListIdx = listIdx * 1;
    uni.setNavigationBarTitle({
      title: `${this.questionListIdx + 1}/${this.questionList.length}`,
    });
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
.detail {
  margin-bottom: 160rpx;
  view {
    background: #fff;
  }
  .bottom_btn {
    position: fixed;
    bottom: 0;
    view {
      width: 200rpx;
      padding: 20rpx 20rpx;
      border-radius: 50rpx;
      color: #fff;
      text-align: center;
    }
    .gray {
      background: #ccc;
    }
    .blue {
      background: rgb(77, 77, 248);
    }
  }
}
</style>