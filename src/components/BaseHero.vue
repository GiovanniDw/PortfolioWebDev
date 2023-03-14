<script setup>
defineProps({
  title: String,
  data: Object
})


// if (data.value) {
//   console.log(data.value)
// }

</script>

<template>
  <div class="hero">
    <div class="image">
      <img v-if='data' :src="data.avatar_url" alt="" />
    </div>
    <div class="content">Hero {{ title }}</div>
  </div>
</template>

<style lang="scss">
.hero {
  // min-height: 80vh;
  background-color: gray;
  width: 100%;
}
</style>
