<template>
  <div class="share">
    <div class="bdsharebuttonbox" data-tag="share_1">
      <a class="bds_weixin" data-cmd="weixin"></a>
      <a class="bds_qzone" data-cmd="qzone" href="#"></a>
      <a class="bds_tsina" data-cmd="tsina"></a>
      <a class="bds_baidu" data-cmd="baidu"></a>
      <a class="bds_sqq" data-cmd="sqq"></a>
      <a class="bds_tieba" data-cmd="tieba"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "share",
  data() {
    return {};
  },
  mounted: function () {
    const that = this;
    setTimeout(() => {
      that.setShare();
    }, 0);
  },
  methods: {
    //分享相关代码
    setShare() {
      //分享相关代码
      window._bd_share_config = {
        common: {
          bdSnsKey: {},
          bdText: "",
          bdMini: "1",
          bdMiniList: false,
          bdPic: "",
          bdStyle: "1",
          bdSize: "24",
        },
        share: {},
        selectShare: {
          bdContainerClass: null,
          bdSelectMiniList: ["sqq", "qzone", "tsina"],
        },
      };
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.src =
        "http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=" +
        ~(-new Date() / 36e5);
      document.body.appendChild(s);
    },
  },
};
</script>
<style lang="less" scoped>
.share {
  width: 100%;
  height: 100%;
}
</style>