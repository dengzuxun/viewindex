<template>
  <div class="aside">
    <van-popup v-model="show" position="right" style="width:100rem;height:100%">
      <div class="items">
        <div class="aside-item" v-for="(item,index) in asideList" :key="index">
          <router-link :to="item.path" :class="(index ==indexstyle ? 'actives':'')">
            <div>
              <span class="iconfont" :class="item.class"></span>
            </div>
            <p>{{item.name}}</p>
          </router-link>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indexstyle: this.$store.state.indexstyle,
      asideList: [
        { name: "首页", class: "icon-shouye", path: "/home" },
        { name: "服务范围", class: "icon-weibiaoti--", path: "/service" },
        { name: "工程案例", class: "icon-anli", path: "/case" },
        { name: "新闻动态", class: "icon-xinwen1", path: "/news" },
        { name: "关于我们", class: "icon-xinwen", path: "/my" },
        { name: "招聘信息", class: "icon-shezhi", path: "/recruitment" },
      ],
      show: true,
    };
  },
};
</script>

<style lang="less" scoped>
.aside {
  width: 156px;
  position: fixed;
  z-index: 2;
  .items {
    margin-top: 50px;
  }
  .aside-item {
    padding: 10px 0;
    font-size: 15px;
    a {
      color: #fff;
    }
    // p {
    //   color: #fff;
    // }
    // div {
    //   color: #fff;
    // }
    .iconfont {
      font-size: 30px;
    }
  }
  .van-popup {
    background: #2b2b2b;
    color: #fff;
  }
  .actives {
    color: red !important;
  }
}
</style>