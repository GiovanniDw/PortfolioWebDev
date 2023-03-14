<script setup>
defineProps({
  data: Object,
});

// if (data.value) {
//   console.log(data.value);
// }
</script>

<template v-if="data">
  <div>
    <h3>Name:{{ data.name }}</h3>
    <p>Size {{ data.size }}</p>
    <a :href="data.url">{{ data.url }}</a>
  </div>
</template>

<style></style>
