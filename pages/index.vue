<script setup>
const {
  data: movies,
  pending,
  error,
} = await useFetch(
  `https://api.themoviedb.org/3/movie/now_playing?api_key=9e0e3fea734301f2135b9ab28c9d8be5&language=en-US&page=1`
)
console.log('movies', movies.value)
// console.log('title', movie.value.title)
</script>

<template>
  <div>
    <section>
      <div class="content">
        <h2>Home page</h2>
        <nuxt-link to="/about" class="nuxt-link">
          <Button label="About" />
        </nuxt-link>
        <div v-if="pending">loading...</div>
        <div v-else class="all-movies">
          <div class="grid">
            <template
              v-for="(movie, index) in movies.results"
              :key="`movie${index}`"
            >
              <movie-card
                class="col-12 md:col-6 lg:col-4 xl:col-3"
                :data="movie"
              />
            </template>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss"></style>
