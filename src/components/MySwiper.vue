<template>
  <div class="chart">
    <h3 class="title">全国疫情趋势图</h3>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in swiperData" :key="index">
        <img :src="item.image" alt="" />
      </swiper-slide>
    </swiper>
    <ul class="navigator">
      <li
        class="navigatorItem"
        :class="{ active: currentIndex === index }"
        v-for="(item, index) in swiperData"
        :key="index"
        @click="handleActiveClick(index)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "MySwiper",
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    let that = this;
    return {
      currentIndex: 0,
      swiperOptions: {
        // autoplay: true,
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        on: {
          slideChangeTransitionEnd() {
            that.currentIndex = this.activeIndex;
          },
        },
      },
      swiperData: [
        {
          image: require("../assets/xinzeng.png"),
          title: "新增疑似/新增确诊",
        },
        {
          image: require("../assets/xiancun.png"),
          title: "现存确诊/现存疑似",
        },
        {
          image: require("../assets/siwang.png"),
          title: "死亡/治愈",
        },
        {
          image: require("../assets/jingwai.png"),
          title: "境外输入",
        },
        {
          image: require("../assets/zhiyu.png"),
          title: "治愈率",
        },
      ],
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    handleActiveClick(index) {
      this.swiper.slideTo(index, 1000, false);
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.line {
  padding: 0 10px;
  width: 100%;
  height: 300px;
}
.chart {
  position: relative;
  background: #fff;
  padding: 0.16rem 0;
}
.chart .title {
  font-size: 0.16rem;
  margin: 0 0 0.08rem 0.16rem;
}
.chart .swiper-pagination {
  position: absolute;
  text-align: center;
  -webkit-transition: 300ms opacity;
  -o-transition: 300ms opacity;
  transition: 300ms opacity;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  z-index: 10;
}
.chart .swiper-pagination-bullet {
  width: calc(20% - 0.02rem);
  text-align: center;
  background: #f7f7f7;
  padding: 0.045rem;
  box-sizing: border-box;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.02rem;
}
.navigator {
  font-size: 0.12rem;
  list-style: none;
  display: flex;
  padding: 0 0.16rem;
  justify-content: center;
  margin: 0.06rem 0 0;
}
.navigatorItem {
  color: #4169e2;
  background: #f1f5ff;
  position: relative;
  width: calc(20% - 0.02rem);
  text-align: center;
  background: #f7f7f7;
  padding: 0.045rem;
  box-sizing: border-box;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.02rem;
  margin-left: 0.025rem;
}
.active {
  color: #4169e2;
  background: #f1f5ff;
  position: relative;
}
</style>