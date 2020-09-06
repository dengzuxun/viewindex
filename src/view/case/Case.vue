<template>
  <div class="case">
    <div class="curtain">
      <h2>建筑幕墙工程案例</h2>
      <div class="curtain-list">
        <div class="curtain-list-img" v-for="(item,index) in curtainList" :key="index">
          <img :src="item.imgUrl" alt />
          <p>{{item.name}}</p>
        </div>
      </div>
      <van-pagination
        @change="curtainGet"
        v-model="currentPage"
        :page-count="curtainpageCount"
        mode="simple"
      />
    </div>
    <div class="decoration">
      <h2>建筑幕墙工程案例</h2>
      <div class="curtain-list">
        <div class="curtain-list-img" v-for="(item,index) in decorationList" :key="index">
          <img :src="item.imgUrl" alt />
          <p>{{item.name}}</p>
        </div>
      </div>
      <van-pagination
        @change="decorationGet"
        v-model="decorationPage"
        :page-count="decorationpageCount"
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
      curtainpageCount: 10,
      decorationPage: 1,
      decorationpageCount: 10,
      curtainList: [
        {
          name: "私人别墅",
          imgUrl:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgvN26zAUowNrSogMwrQI4zgE!640x640.jpg.webp",
        },
        {
          name: "私人别墅",
          imgUrl:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgvN26zAUowNrSogMwrQI4zgE!640x640.jpg.webp",
        },
        {
          name: "私人别墅",
          imgUrl:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgvN26zAUowNrSogMwrQI4zgE!640x640.jpg.webp",
        },
        {
          name: "私人别墅",
          imgUrl:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgvN26zAUowNrSogMwrQI4zgE!640x640.jpg.webp",
        },
      ],
      decorationList: [
        {
          name: "私人别墅",
          imgUrl:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgvN26zAUowNrSogMwrQI4zgE!640x640.jpg.webp",
        },
        {
          name: "私人别墅",
          imgUrl:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgvN26zAUowNrSogMwrQI4zgE!640x640.jpg.webp",
        },
        {
          name: "私人别墅",
          imgUrl:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgvN26zAUowNrSogMwrQI4zgE!640x640.jpg.webp",
        },
        {
          name: "私人别墅",
          imgUrl:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgvN26zAUowNrSogMwrQI4zgE!640x640.jpg.webp",
        },
      ],
    };
  },
  created() {
    // 页面加载获取数据
  },
  methods: {
    // curtain改变页数发生的事件
    curtainGet(e) {
      console.log(e);
    },
    decorationGet(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="less" scoped>
.case {
  h2 {
    text-align: left;
    font-size: 18px;
    line-height: 40px;
    margin-left: 10px;
    margin-bottom: 10px;
  }
  .curtain-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .curtain-list-img {
      margin: 5px 0;
      width: 48%;
      img {
        box-sizing: border-box;
        width: 100%;
      }
      p {
        color: #666666;
        font-size: 14px;
      }
    }
  }
}
</style>