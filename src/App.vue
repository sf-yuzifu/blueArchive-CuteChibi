<script setup>
import Header from './components/theHeader.vue'
import Pic from './components/thePicture.vue'
</script>

<template>
  <Header></Header>
  <div class="container">
    <a-typography-title :style="{ textAlign: 'center' }" class="title">
      {{ $t('trans.prompt') }}
    </a-typography-title>
    <a-typography-title :heading="6" :style="{ textAlign: 'center' }" class="subtitle">
      （{{ $t('trans.tip') }}）
    </a-typography-title>
    <Pic></Pic>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  margin: auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
