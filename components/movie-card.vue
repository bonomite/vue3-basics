<script setup>
import { ref } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const data = ref(props.data)

//console.log('data in card', data.value)
</script>

<template>
  <div class="card">
    <h3>{{ data.title }} {{ data.release_date }}</h3>
    <img
      :src="`https://image.tmdb.org/t/p/w220_and_h330_face${data.poster_path}`"
      :alt="data.tagline"
    />
    <nuxt-link :to="data.homepage" target="_blank">
      <Button icon="pi pi-external-link" class="p-button-rounded" />
    </nuxt-link>
  </div>
</template>

<style lang="scss">
.card {
  position: relative;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  .p-button {
    position: absolute;
    left: 25px;
    bottom: 30px;
  }
}
</style>
