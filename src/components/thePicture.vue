<script setup>
import { ref } from 'vue'

const files = import.meta.glob('/src/pic/*.jpg', { as: 'url', eager: true })
const chibi = ref('')

let toggle = false

chibi.value = files[Object.keys(files)[0]]
const sleep = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, timeout)
  })
}

const change_chibi = async () => {
  toggle = !toggle
  if (toggle) {
    for (;;) {
      for (const path in files) {
        await sleep(10)
        chibi.value = files[path]
        document.querySelector('#favicon').setAttribute('href', chibi.value)
        if (!toggle) break
      }
      if (!toggle) break
    }
  }
}
</script>

<template>
  <img id="chibi" :src="chibi" alt="" @click="change_chibi" @dragstart.prevent />
</template>

<style scoped>
#chibi {
  max-width: 400px;
  max-height: 400px;
  width: 90%;
  user-select: none;
  margin: 40px;
}
</style>
