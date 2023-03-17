<script setup>
  import { ref, computed } from "vue";
  import { storeToRefs } from "pinia";
  import { useReposStore } from "@/stores/repos";
  import {
    onBeforeRouteLeave,
    onBeforeRouteUpdate,
    RouterLink,
    useRoute,
  } from "vue-router";
  const route = useRoute();
  const routeParams = route.params.id;
  const projectID = ref("");
  // const id = parseInt(route.params.id);
  const store = useReposStore();
  const { data, setID, id } = storeToRefs(store);
  import RepoItem from "@/components/RepoItem.vue";

  const list = ref([]);

  // if (data.value) {
  //   list.value = data.value;
  // }

  // if (id.value) {
  //   console.log(id.value);
  //   projectID.value = id;
  // }

  const computedList = computed(() => {
    if (!data.value) {
      return;
    }
    console.log(data.value);
    return data.value.filter((item) => {
      return item.homepage !== null;
    });
  });

  // console.log(import.meta.env.VITE_GITHUB_TOKEN);
</script>

<template>
  <main class="project">
    <section>
      <h1>Projects</h1>
      <RepoItem :data="computedList" :id="id" />
    </section>
  </main>
</template>

<style lang="scss">
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    gap: 1em;
  }

  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>
