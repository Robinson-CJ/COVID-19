<template>
  <div>
    <ul class="tabs_header">
      <slot></slot>
    </ul>
    <Content :tabsArr="tabsArr"></Content>
  </div>
</template>

<script>
import Content from "./Content.vue";
export default {
  name: "Tabs",
  components: {
    Content,
  },
  data() {
    return {
      currentTab: "",
      tabsArr: [],
    };
  },
  mounted() {
    this.currentTab = this.$children[0].name || "";
  },
  methods: {
    getCurrentTab(name) {
      this.currentTab = name;
      this.$emit("tab_clcik", name);
    },
  },
};
</script>

<style>
.tabs_header {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 2px solid #ededed;
}
</style>