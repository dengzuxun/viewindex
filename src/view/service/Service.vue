<template>
  <div class="service">
    <p class="service-title">服务范围</p>
    <ul>
      <li class="service-list" v-for="(item,index) in serviceList" :key="index">
        <van-row>
          <van-col span="10" offset="1">
            <img :src="item.imgUrl" alt />
          </van-col>
          <van-col span="11" offset="1">
            <h5>{{item.title}}</h5>
            <p>{{item.text}}</p>
          </van-col>
          <van-col span="1"></van-col>
        </van-row>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      serviceList: [
        {
          title: "建设幕墙工程",
          text: "建筑幕墙指的是建筑物不承重的外墙护围。",
          imgUrl:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAg0p22zAUotMb52AMwrAI4tgE.jpg.webp",
        },
        {
          title: "建设幕墙工程",
          text: "建筑幕墙指的是建筑物不承重的外墙护围。",
          imgUrl:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAg0p22zAUotMb52AMwrAI4tgE.jpg.webp",
        },
        {
          title: "建设幕墙工程",
          text: "建筑幕墙指的是建筑物不承重的外墙护围。",
          imgUrl:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAg0p22zAUotMb52AMwrAI4tgE.jpg.webp",
        },
        {
          title: "建设幕墙工程",
          text: "建筑幕墙指的是建筑物不承重的外墙护围。",
          imgUrl:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAg0p22zAUotMb52AMwrAI4tgE.jpg.webp",
        },
        {
          title: "建设幕墙工程",
          text: "建筑幕墙指的是建筑物不承重的外墙护围。",
          imgUrl:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAg0p22zAUotMb52AMwrAI4tgE.jpg.webp",
        },
        {
          title: "建设幕墙工程",
          text: "建筑幕墙指的是建筑物不承重的外墙护围。",
          imgUrl:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAg0p22zAUotMb52AMwrAI4tgE.jpg.webp",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.service {
  text-align: left;
  .service-title {
    font-size: 18px;
    line-height: 50px;
    margin-left: 20px;
    margin-bottom: 15px;
  }
  .service-list {
    margin: 15px 0;
    img {
      width: 100%;
      height: 100%;
    }
    h5 {
      font-size: 18px;
      font-weight: bold;
    }
    p {
      font-size: 14px;
      color: #666666;
    }
  }
}
</style>