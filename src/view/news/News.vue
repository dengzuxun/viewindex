<template>
  <div class="news">
    <h3>新闻动态</h3>
    <div class="news-img">
      <img
        src="//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgxvG6zAUol5GuwgMwgAU4rAI!900x900.jpg"
        alt
      />
    </div>
    <div class="news-list">
      <ul>
        <li v-for="(item,index) in newsList" :key="index" @click="newsListclick">
          <p>{{item.text}}</p>
        </li>
      </ul>
      <van-pagination
        @change="newsClick"
        v-model="currentPage"
        :page-count="newsPage"
        mode="simple"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      newsPage: 12,
      newsList: [
        { text: "行业动态行业动态行业动态行业动态" },
        { text: "行业动态行业动态行业动态行业动态" },
        { text: "行业动态行业动态行业动态行业动态" },
        { text: "行业动态行业动态行业动态行业动态" },
        { text: "行业动态行业动态行业动态行业动态" },
      ],
    };
  },
  methods: {
    // 页数
    newsClick(e) {
      console.log(e);
    },
    newsListclick() {
      this.$router.push("/newsList");
    },
  },
};
</script>

<style lang="less" scoped>
.news {
  text-align: left;
  h3 {
    font-size: 18px;
    line-height: 40px;
    margin-bottom: 10px;
    margin-left: 20px;
  }
  .news-img {
    margin: 0 20px;

    img {
      width: 100%;
    }
  }
  .news-list {
    margin: 0 20px;
    li {
      line-height: 40px;
      font-size: 15px;
      border-bottom: 1px solid #eee;
    }
  }
}
</style>