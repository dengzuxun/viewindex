<template>
  <div class="footer">
    <van-tabbar active-color="#000" inactive-color="#fff">
      <van-tabbar-item to="/phoneAsk">
        <template>
          <i class="iconfont icon-dianhua"></i>
        </template>
        <p>
          <span @click="callPhone()">电话咨询</span>
        </p>
      </van-tabbar-item>
      <van-tabbar-item to="/infoask">
        <template>
          <i class="iconfont icon-xinxi"></i>
        </template>
        <p>信息咨询</p>
      </van-tabbar-item>
      <van-tabbar-item to="/map">
        <template>
          <i style="font-size:29px" class="iconfont icon-dizhi"></i>
        </template>
        <p>在线地图</p>
      </van-tabbar-item>
      <van-tabbar-item>
        <template>
          <i class="iconfont icon-duoge"></i>
        </template>
        <p @click="shareClick">分享</p>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  methods: {
    callPhone() {
      window.location.href = "tel://" + 15974416289;
    },
    shareClick() {
      // console.log(this.$store);
      this.$store.commit("shareShow", true);
    },
  },
};
</script>

<style lang="less">
.footer {
  .van-tabbar-item__text {
    text-align: center;
  }
  .van-tabbar {
    background: red;
  }
  p {
    margin: 0;
  }
  i {
    font-size: 22px;
  }
}
</style>