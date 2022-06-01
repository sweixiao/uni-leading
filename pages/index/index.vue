<template>
  <view class="content">
    <view>
      <swiper
        class="swiper"
        circular
        :autoplay="true"
        :interval="3000"
        :duration="1000"
        style="height: 320rpx"
      >
        <swiper-item v-for="item in swiperArr" :key="item.id">
          <image
            :src="item.img"
            mode=""
            style="width: 100%; height: 100%"
          ></image>
        </swiper-item>
      </swiper>
    </view>
    <view class="ml-10 f-18 mt-30">前端技术</view>
    <view class="function_box">
      <view
        v-for="item in functionArr"
        :key="item.id"
        class="box box-column-center function_type box-between p-15 mt-15 f-14"
        @click="question(item)"
      >
        <image
          :src="item.img"
          mode=""
          style="width: 70rpx; height: 70rpx"
        ></image>
        <view>{{ item.name }}</view>
      </view>
    </view>
    <u-toast ref="uToast"></u-toast>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
      swiperArr: [
        {
          id: 1,
          img: "https://resource.oss.yatiku.com/wxprogram/leading/1.png",
        },
        {
          id: 2,
          img: "https://resource.oss.yatiku.com/wxprogram/leading/2.jpeg",
        },
      ],
      functionArr: [
        {
          id: 1,
          img: "https://resource.oss.yatiku.com/wxprogram/leading/html.jpg",
          name: "前端基础知识",
          tableName: "fe-question",
        },
        // {
        //   id: 2,
        //   img: "../../static/img/css.jpg",
        //   name:'CSS'
        // },
        // {
        //   id: 3,
        //   img: "../../static/img/js.jpg",
        //   name:'JavaScript'
        // },
        {
          id: 4,
          img: "https://resource.oss.yatiku.com/wxprogram/leading/vue.jpg",
          name: "Vue.js",
          tableName: "vue-question",
        },
        {
          id: 5,
          img: "https://resource.oss.yatiku.com/wxprogram/leading/react.jpg",
          name: "React.js",
          tableName: "react-question",
        },
        {
          id: 6,
          img: "https://resource.oss.yatiku.com/wxprogram/leading/wx.jpg",
          name: "微信小程序",
          tableName: "wx-question",
        },
      ],
    };
  },
  async onLoad() {},
  methods: {
    //跳转题目
    question(item) {
      if(item.id==6){
        return  this.$refs.uToast.show({
          type: "default",
          icon: false,
          message: "正在更新，尽请期待",
          iconUrl: "https://cdn.uviewui.com/uview/demo/toast/error.png",
        });
      }
      uni.navigateTo({
        url: `/pages/question/index?title=${item.name}&tableName=${item.tableName}`,
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.content {
  background: #f5f5f5;
  height: 100vh;
}
.function_box {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  .function_type {
    width: 280rpx;
    background: #fff;
    border-radius: 10rpx;
    color: #333;
  }
}
</style>
