<template>
  <div class="newsList">
    <div class="newsList-title">
      <h3>行业动态行业动态</h3>
      <p>2020-08-26</p>
    </div>
    <div class="newsList-introduce">
      <p>行业动态行业动态行业动态行业动态行业动态行业动态行业动态行业动态</p>
    </div>
    <div class="tops">
      <div @click="backClick">
        <span class="iconfont icon-fanhui"></span>
      </div>
      <div @click="share">
        <span style="color:#333333a6;" class="iconfont icon-fenxiang1"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    backClick() {
      this.$router.push("/news");
    },
    share() {},
  },
};
</script>

<style lang="less" scoped>
.newsList {
  text-align: left;

  .newsList-title {
    margin: 0 20px;
    h3 {
      font-size: 18px;
      line-height: 30px;
    }
    p {
      line-height: 20px;
    }
  }
  .newsList-introduce {
    margin: 0 20px;
    font-size: 15px;
    line-height: 30px;
  }
  .tops {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    div {
      width: 30px;
      height: 30px;
      background: rgba(255, 255, 255, 0.7);
      border-radius: 50%;
      margin: 0 20px;
      box-sizing: border-box;
    }

    span {
      font-size: 18px;
      vertical-align: text-top;
      color: #333;
    }
  }
}
</style>