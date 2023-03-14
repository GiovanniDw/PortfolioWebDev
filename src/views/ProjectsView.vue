<script setup>
import RepoItem from "@/components/RepoItem.vue";

import { useReposStore } from "@/stores/repos";
import { storeToRefs } from "pinia";
const store = useReposStore();
const { data } = storeToRefs(store);
</script>

<template>
  <main class="project">
    <h1>Projects</h1>
    <div v-if="data" class="grid">
      <RepoItem v-for="repo in data" :data="repo" :key="repo.id" />
    </div>
  </main>
</template>

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  gap: 1em;
}
</style>
