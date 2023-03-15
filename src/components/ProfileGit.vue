<script setup>
defineProps({
  data: Object
})

// if (data.value) {
//   console.log(data.value)
// }
</script>

<template>
  <section>
    <div class="image">
      <!-- <img v-if='data' :src="data.avatar_url" alt="" /> -->
    </div>
    <div class="content">Hero {{ title }}</div>
  </section>
</template>

<style scoped lang="scss">
section {
  // min-height: 80vh;
  // background-color: gray;
  width: 100%;
}
</style>
