<template>
  <VueLenis root>
    <div>
      <slot />
    </div>
  </VueLenis>
</template>

<script setup>
import { VueLenis, useLenis } from 'lenis/vue'
import { watch } from 'vue'

const lenis = useLenis(() => {
})

watch(lenis, () => {

})
</script>
