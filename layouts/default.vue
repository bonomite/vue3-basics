<script setup>
import { ref } from 'vue'
import { useRuntimeConfig } from '#app'
const config = useRuntimeConfig()
const route = useRoute()
const darkMode = ref(false)
</script>

<template>
  <div
    class="page"
    :class="[`${route.name}`]"
    :data-style-mode="darkMode ? 'dark' : 'default'"
  >
    header
    <main>
      <slot />
    </main>
    footer
  </div>
</template>

<style lang="scss">
body,
html {
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
