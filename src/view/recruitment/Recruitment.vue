<template>
  <div class="recruitment">
    <h3>招聘信息</h3>
    <div class="recruitment-list">
      <ul>
        <li v-for="(item,index) in recruitmentList" :key="index">
          <router-link :to="item.path">
            <div class="recruitment-text">
              <p>{{item.title}}</p>
            </div>
            <div class="recruitment-img">
              <img :src="item.imgUrl" alt />
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recruitmentList: [
        {
          title: "文章文章文章文章文章文章文章文章",
          imgUrl:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgwPS6zAUonbDHhgcwuwE4sQE.jpg",
          path: "/details",
        },
        {
          title:
            "文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章",
          imgUrl:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgwPS6zAUonbDHhgcwuwE4sQE.jpg",
          path: "/details",
        },
        {
          title:
            "文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章",
          imgUrl:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgwPS6zAUonbDHhgcwuwE4sQE.jpg",
          path: "/details",
        },
        {
          title:
            "文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章",
          imgUrl:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgwPS6zAUonbDHhgcwuwE4sQE.jpg",
          path: "/details",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.recruitment {
  text-align: left;
  h3 {
    font-size: 18px;
  }
  .recruitment-list {
    margin: 0 10px;
    li {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
      img {
        width: 50px;
        height: 50px;
      }
      p {
        font-size: 15px;
        color: #666;
      }
    }
  }
}
</style>