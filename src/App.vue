<script setup>
import Header from './components/theHeader.vue'
import Pic from './components/thePicture.vue'
</script>

<template>
  <Header></Header>
  <div class="container">
    <a-typography-title :style="{ textAlign: 'center' }">
      {{ $t('trans.prompt') }}
    </a-typography-title>
    <a-typography-title :heading="6" :style="{ textAlign: 'center' }">
      （{{ $t('trans.tip') }}）
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
