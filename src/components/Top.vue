<template>
  <div class="tops">
    <p @click="toTop">
      Top
      <span></span>
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    toTop() {
      document.getElementById("app").scrollIntoView();
    },
  },
};
</script>

<style lang="less" scoped>
.tops {
  text-align: right;
  position: relative;
  background: red;
  line-height: 30px;
  color: #fff;
  margin-top: 20px;
  p {
    padding: 0 30px;
    font-size: 18px;
  }
  span {
    position: absolute;
    width: 0;
    height: 0;
    top: 5px;
    right: 10px;
    border: 6px transparent solid;
    border-bottom-color: #fff;
  }
}
</style>