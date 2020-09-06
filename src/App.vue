<template>
  <div id="app">
    <Header v-if="this.$store.state.topshow" />
    <div>
      <router-view></router-view>
      <Aside v-if="show" />
    </div>
    <Top />
    <Footer />
    <Copyright />

    <van-popup
      v-model="shareShows"
      position="bottom"
      :style="{ height: '30%' }"
      @close="shareShowClick"
    >
      <Share />
    </van-popup>
    <!-- <van-popup v-model="show">内容</van-popup>/ -->
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Aside from "./components/Aside";
import Top from "./components/Top";
import Copyright from "./components/Copyright";
import Share from "./components/Share";
// import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Aside,
    Top,
    Copyright,
    Share,
  },
  data() {
    return {
      shareShows: this.$store.state.shareShow,
    };
  },

  computed: {
    show() {
      return this.$store.getters.show;
    },
    // shareShows() {
    //   return this.$store.getters.shareShow;
    // },
  },
  created() {
    const screenWidth =
      document.documentElement.clientWidth || window.clientWidth;
    document.documentElement.style.fontSize = screenWidth / 375 + "px";
  },
  methods: {
    shareShowClick() {
      this.$store.commit("shareShow", false);
    },
  },
};
</script>

<style>
@import "./assets/style/reset.css";

#app {
  margin: 50px 0;
  margin-bottom: 60px;
}
</style>
