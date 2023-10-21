<script setup>
import Header from './components/theHeader.vue'
import Pic from './components/thePicture.vue'
</script>

<template>
  <Header></Header>
  <div class="container">
    <a-typography-title :style="{ textAlign: 'center' }">
      快来选择你心仪的铸币大头吧！
    </a-typography-title>
    <a-typography-title :heading="6" :style="{ textAlign: 'center' }">
      （点击铸币大头即可开始选择！）
    </a-typography-title>
    <Pic></Pic>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
