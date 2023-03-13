<script setup>
import { ref } from 'vue';
defineProps({
  name: 'Giovanni',
});
</script>

<template>
  <div class='hero'>
    <div class='image'>
      <img src='./icons/IconCommunity.vue' alt=''>
    </div>
    <div class='content'>Hero</div>
  </div>
</template>

<style lang='scss'>
.hero {
  min-height: 80vh;
  width: 100%;

}
</style>

