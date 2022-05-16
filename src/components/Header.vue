<template>
  <div class="header"></div>
</template>

<script>
export default {};
</script>

<style>
.header {
  position: relative;
  width: 100%;
  height: 0;
  /* 以自身宽度为基准 */
  padding-top: 32.5%;
  color: #fff;
  font-size: 0.28rem;
  text-align: center;
  background: url(../assets/header.png) no-repeat;
  /* 保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小 */
  background-size: cover;
}
</style>
