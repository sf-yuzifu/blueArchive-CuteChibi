<script setup>
import { ref } from 'vue'

const files = import.meta.glob('/src/pic/*.jpg', { as: 'url', eager: true })
const zhubi = ref('')

let toggle = false

zhubi.value = files[Object.keys(files)[0]]
const sleep = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, timeout)
  })
}

const change_zhubi = async () => {
  toggle = !toggle
  if (toggle) {
    for (;;) {
      for (const path in files) {
        await sleep(10)
        zhubi.value = files[path]
        document.querySelector('#favicon').setAttribute('href', zhubi.value)
        if (!toggle) break
      }
      if (!toggle) break
    }
  }
}
</script>

<template>
  <img id="zhubi" :src="zhubi" alt="" @click="change_zhubi" @dragstart.prevent />
</template>

<style scoped>
#zhubi {
  max-width: 400px;
  max-height: 400px;
  width: 90%;
  user-select: none;
  margin: 40px;
}
</style>
