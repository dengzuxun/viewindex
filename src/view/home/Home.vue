<template>
  <div class="home">
    <div class="home-tab">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img
            src="//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgv-G6zAUonM6_-QUwgAU4rAI!900x900.jpg.webp"
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgxvG6zAUol5GuwgMwgAU4rAI!900x900.jpg.webp"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="hoem-tab-item">
      <van-row>
        <van-col span="6" v-for="(item,index) in tabItem" :key="index">
          <div class="item-wrap">
            <router-link :to="item.link">
              <div class="list-item-img">
                <img :src="item.imgUrl" alt />
              </div>
              <p>{{item.name}}</p>
            </router-link>
          </div>
        </van-col>
      </van-row>
    </div>

    <div class="g-project">
      <p style="font-size:18px; font-weight:bold">
        <span>大型合作项目</span>
      </p>
      <p style="color:gray">
        <span>LARGE COOPERATION PROJECTS</span>
      </p>
      <vue-seamless-scroll :data="newsList" :class-option="optionLeft" class="seamless-warp2">
        <img v-for="(item,index) in newsList" :key="index" :src="item.urlImg" alt />
      </vue-seamless-scroll>
    </div>
    <div class="culture">
      <p style="font-size:18px; font-weight:bold">
        <span>任重道远的企业文化</span>
      </p>
      <p style="color:gray">
        <span>LONG COURSE OF ENTERPRISE</span>
      </p>
      <div class="culture-img">
        <img
          src="//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgu-W6zAUogtym3AUw3wQ48QE.jpg.webp"
          alt
        />
      </div>
      <div class="text-culture">
        <p>
          公司秉承“品质为上 精益求精，安全守信 永续创新”的企业方针，立志成为国内知名且具影响力的专业门窗、幕墙、装饰工程的设计与施工企业。
          公司现有管理及设计人员均来自国内优异专业公司并经过数年锤炼，积累了丰富的宝贵专业经验，为公司发展打下坚实的基础。
        </p>
        <p>
          公司经营范围：建筑幕墙技术开发；建筑幕墙工程；建筑装饰装修工程；钢结构工程；电子与智能化工程；城市及道路照明工程；防水防腐保湿工程；
          市政公用工程；园林绿化服务；光伏设备的开发及销售；清洁服务；进出口业务；建材的销售。
        </p>
      </div>
    </div>
    <div class="qualification">
      <p style="font-size:18px; font-weight:bold">
        <span>企业资质</span>
      </p>
      <p style="color:gray">
        <span>ENTERPRISE QUALIFICATION</span>
      </p>
      <vue-seamless-scroll :data="qualification" :class-option="optionLeft" class="seamless-warp2">
        <img v-for="(item,index) in qualification" :key="index" :src="item.urlImg" alt />
      </vue-seamless-scroll>
    </div>
    <div class="news">
      <p style="font-size:18px; font-weight:bold">
        <span>新闻动态</span>
      </p>
      <p style="color:gray">
        <span>news</span>
      </p>
      <div class="news-text">
        <ul style="text-align:left;">
          <li v-for="(item,index) in articleList" :key="index" @click="articleClick">
            <p>{{item.title}}</p>
            <span>{{item.date}}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" /> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      showShare: true,
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" },
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" },
        ],
      ],
      // 案例图片
      newsList: [
        {
          urlImg:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgwPS6zAUonbDHhgcwuwE4sQE.jpg",
        },
        {
          urlImg:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgwPS6zAUonbDHhgcwuwE4sQE.jpg",
        },
        {
          urlImg:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgwPS6zAUonbDHhgcwuwE4sQE.jpg",
        },
        {
          urlImg:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgwPS6zAUonbDHhgcwuwE4sQE.jpg",
        },
        {
          urlImg:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgw-S6zAUoz9W_zgIwuwE4sQE!640x640.jpg",
        },
      ],
      // 资质图片
      qualification: [
        {
          urlImg:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgwPS6zAUonbDHhgcwuwE4sQE.jpg",
        },
        {
          urlImg:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgwPS6zAUonbDHhgcwuwE4sQE.jpg",
        },
        {
          urlImg:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgwPS6zAUonbDHhgcwuwE4sQE.jpg",
        },
        {
          urlImg:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgwPS6zAUonbDHhgcwuwE4sQE.jpg",
        },
        {
          urlImg:
            "//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgw-S6zAUoz9W_zgIwuwE4sQE!640x640.jpg",
        },
      ],
      tabItem: [
        {
          name: "服务范围",
          imgUrl:
            "//14517553.s61i.faiusr.com/4/AD0IsYr2BhAEGAAg9PG6zAUo6M__oQYwUDhQ.png.webp",
          link: "/service",
        },
        {
          name: "工程案例",
          imgUrl:
            "//14517553.s61i.faiusr.com/4/AD0IsYr2BhAEGAAg9PG6zAUo6M__oQYwUDhQ.png.webp",
          link: "/case",
        },
        {
          name: "新闻动态",
          imgUrl:
            "//14517553.s61i.faiusr.com/4/AD0IsYr2BhAEGAAg9PG6zAUo6M__oQYwUDhQ.png.webp",
          link: "/news",
        },
        {
          name: "招聘信息",
          imgUrl:
            "//14517553.s61i.faiusr.com/4/AD0IsYr2BhAEGAAg9PG6zAUo6M__oQYwUDhQ.png.webp",
          link: "/recruitment",
        },
      ],
      // 文章
      articleList: [
        {
          title: "文章文章文章文章文章文章文章文章文章文章文章文章",
          date: "2020/08/06",
        },
        {
          title: "文章文章文章文章文章文章文章文章文章文章文章文章",
          date: "2020/08/06",
        },
        {
          title: "文章文章文章文章文章文章文章文章文章文章文章文章",
          date: "2020/08/06",
        },
        {
          title: "文章文章文章文章文章文章文章文章文章文章文章文章",
          date: "2020/08/06",
        },
        {
          title: "文章文章文章文章文章文章文章文章文章文章文章文章",
          date: "2020/08/06",
        },
      ],
    };
  },
  computed: {
    optionLeft() {
      return {
        direction: 2,
        limitMoveNum: 2,
      };
    },
  },
  methods: {
    articleClick() {
      this.$router.push("/article");
    },
  },
};
</script>
<style lang="less">
.home {
  overflow: hidden;
}
.home-tab img {
  width: 100%;
  height: 100%;
}
.home-tab {
  position: relative;
}
.my-swipe {
  color: #fff;
  font-size: 20px;
  text-align: center;
}
.van-swipe__indicators {
  position: absolute;
  bottom: 16px;
}
.van-swipe__indicator {
  width: 10px;
  height: 10px;
}

.g-project {
  margin: 30px 0;
}

.seamless-warp2 {
  overflow: hidden;
  margin-top: 30px;
  height: 150px;
  width: 1200px;
  img {
    width: 150px;
    height: 100%;
    margin-left: 20px;
  }
  .seamless-warp {
    height: 229px;
    overflow: hidden;
  }
}
.culture {
  margin-bottom: 50px;
  .culture-img {
    margin-top: 10px;
  }
  .text-culture {
    text-align: left;
    line-height: 20px;
    color: #666666;
    font-size: 15px;
  }
}
.news-text {
  margin: 0 10px;
  li {
    padding: 5px 0;
    border-bottom: 2px solid #eee;
  }
  p {
    font-size: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 40px;
  }
  span {
    color: #999999;
    font-size: 15px;
  }
}
</style>