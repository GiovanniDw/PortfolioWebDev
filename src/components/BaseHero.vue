<script setup>
  import { RouterLink } from "vue-router";
  defineProps({
    data: Object,
  });
</script>

<template>
  <section v-if="data" class="hero">
    <div class="image">
      <img :src="data.avatar_url" alt="" />
    </div>
    <div class="content">
      <h2>👋 Hi</h2>
      <p>
        {{ data.bio }}
      </p>
      <br />
      <p>Checkout my <RouterLink to="/projects">Projects</RouterLink></p>
    </div>
  </section>
</template>

<style scoped lang="scss">
  section {
    max-width: 800px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    // min-height: 80vh;
    // background-color: gray;
    // width: 100%;
    min-height: 30em;
    margin-inline: auto;
  }

  section div img {
    width: 20em;
  }
</style>
