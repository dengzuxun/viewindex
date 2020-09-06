<template>
  <div class="header">
    <router-link to="/">
      <h1>深圳中航建设有限公司</h1>
    </router-link>
    <div class="icons" @click="showAside">
      <i></i>
      <i></i>
      <i></i>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    showAside() {
      this.$store.commit("showUp", !this.$store.state.show);
    },
  },
};
</script>
<style lang="less">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  height: 50px;
  line-height: 50px;
  background: url("https://mo.faisys.com/image/template/1016/topbg.png?v=201610211723");
  background-color: #f23030;
  background-size: cover;
  h1 {
    color: #fff;
    font-size: 20px;
    display: inline-block;
  }
  .icons {
    position: absolute;
    right: 10px;
    width: 22px;
    top: 10px;
    i {
      display: block;
      width: 22px;
      height: 2px;
      background: #fff;
      margin: 5px 0;
    }
  }
}
</style>