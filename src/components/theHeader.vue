<script setup>
import { ref } from 'vue'

const visible = ref(false)
const handleClick = () => {
  visible.value = true
}
const handleOk = () => {
  visible.value = false
}
const handleCancel = () => {
  visible.value = false
}
</script>

<template>
  <a-page-header
    :show-back="false"
    :style="{ background: 'var(--color-bg-2)' }"
    subtitle=""
    title="蔚蓝档案铸币大头自选"
  >
    <template #extra>
      <a-space>
        <a-button
          href="https://github.com/sf-yuzifu/blueArchive-ZhubiDatou"
          size="large"
          type="text"
        >
          <template #icon>
            <icon-github />
          </template>
        </a-button>
        <a-button size="large" type="text" @click="handleClick">
          <template #icon>
            <icon-copyright size="28" />
          </template>
        </a-button>
      </a-space>
    </template>
  </a-page-header>
  <a-modal
    v-model:visible="visible"
    :footer="false"
    :modal-style="{ maxWidth: '600px', minWidth: '400px' }"
    width="auto"
    @cancel="handleCancel"
    @ok="handleOk"
  >
    <template #title> 版权声明</template>
    <a-typography-title heading="6">
      所有铸币大头来源：
      <a-link href="https://www.pixiv.net/users/51776118">困倦沙拉</a-link>
    </a-typography-title>
    <a-typography-title heading="6">
      使用的组件：
      <a-link href="https://arco.design/">Arco Design</a-link>
    </a-typography-title>
  </a-modal>
</template>

<style scoped>
.arco-icon {
  font-size: 24px;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 5;
}
</style>
