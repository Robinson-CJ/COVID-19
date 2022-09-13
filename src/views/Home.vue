<template>
  <div>
    <Header />
    <Covid19Info :covidInfo="covidInfo" />
    <Covid19Num :covidNum="covidNum" />
    <Map />
    <MySwiper></MySwiper>
    <Travel></Travel>
    <HotNews :newsList="newsList"></HotNews>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Covid19Info from "@/components/Covid19Info.vue";
import Covid19Num from "@/components/Covid19Num";
import Map from "@/components/Map.vue";
import MySwiper from "@/components/MySwiper.vue";
import Travel from "@/components/Travel.vue";
import HotNews from "../components/HotNews.vue";

export default {
  name: "Home",
  components: {
    Header,
    Covid19Info,
    Covid19Num,
    Map,
    MySwiper,
    Travel,
    HotNews,
  },
  data() {
    return {
      covidInfo: {
        note1: "",
        note2: "",
        note3: "",
        remark1: "",
        remark2: "",
        remark3: "",
      },
      covidNum: {
        // 现存确诊
        currentConfirmedCount: 0,
        // 累计确诊
        confirmedCount: 0,
        // 累计境外输入
        suspectedCount: 0,
        // 累计治愈
        curedCount: 0,
        // 累计死亡
        deadCount: 0,
        // 现存无症状
        seriousCount: 0,
        // 较昨日
        currentConfirmedIncr: 0,
        confirmedIncr: 0,
        suspectedIncr: 0,
        curedIncr: 0,
        deadIncr: 0,
        seriousIncr: 0,
        // 截止日期
        modifyTime: 0,
      },
      newsList: [],
    };
  },
  async created() {
    const { data } = await this.$api.getNocv({
      key: "575ec1e5c174c137bb1e213b90541fd5",
    });
    if (data.code === 200) {
      const desc = data.newslist[0].desc;
      // 疫情热点新闻
      this.newsList = data.newslist[0].news;
      // 病毒信息
      this.covidInfo.note1 = desc.note1;
      this.covidInfo.note2 = desc.note2;
      this.covidInfo.note3 = desc.note3;
      this.covidInfo.remark1 = desc.remark1;
      this.covidInfo.remark2 = desc.remark2;
      this.covidInfo.remark3 = desc.remark3;
      // 今日数据
      this.covidNum.currentConfirmedCount = desc.currentConfirmedCount;
      this.covidNum.confirmedCount = desc.confirmedCount;
      this.covidNum.suspectedCount = desc.suspectedCount;
      this.covidNum.curedCount = desc.curedCount;
      this.covidNum.deadCount = desc.deadCount;
      this.covidNum.seriousCount = desc.seriousCount;
      // 较昨日新增
      this.covidNum.currentConfirmedIncr = desc.currentConfirmedIncr;
      this.covidNum.confirmedIncr = desc.confirmedIncr;
      this.covidNum.suspectedIncr = desc.suspectedIncr;
      this.covidNum.curedIncr = desc.curedIncr;
      this.covidNum.deadIncr = desc.deadIncr;
      this.covidNum.seriousIncr = desc.seriousIncr;
      // 截至日期
      this.covidNum.modifyTime = desc.modifyTime;
    }
  },
};
</script>

<style>
</style>