<script setup>
import { computed } from "vue";
import BaseHero from "@/components/BaseHero.vue";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
const store = useUserStore();
const { data, username } = storeToRefs(store);

const getImageUrl = computed(() => {
  return data.avatar_url;
});
</script>

<template>
  <main class="about">
    <BaseHero :data="data" :title="'About'" />
    <div class="content" v-if="data">
      <div>
        <img :src="data.avatar_url" alt="" />
      </div>
      <div>
        <p>info</p>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
img {
  width: 100%;
}

.content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
}
</style>
