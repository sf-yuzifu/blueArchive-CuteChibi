<script setup>
import Header from './components/theHeader.vue'
import Pic from './components/thePicture.vue'
</script>

<template>
  <Header></Header>
  <div class="container">
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
}
</style>
