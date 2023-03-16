<script setup>
  import { ref, computed } from "vue";
  import { storeToRefs } from "pinia";

  import { useReposStore } from "@/stores/repos";

  import RepoItem from "@/components/RepoItem.vue";

  const store = useReposStore();

  const { data } = storeToRefs(store);

  const list = ref([]);

  const q = ref("");

  if (data.value) {
    list.value = data.value;
  }

  const computedList = computed(() => {
    if (!data.value) {
      return;
    }
    console.log(data.value);
    return data.value.filter((item) => {
      return item.homepage !== null;
    });
  });

  // const computedList = computed(() => {
  //   if (!data.value) {
  //     return;
  //   }

  //   console.log(data.value);
  //   const array = data.value;
  //   return array.filter((item) =>
  //     Object.keys(item).some((k) => item[k].toLowerCase().includes(q.value))
  //   );
  // });

  // function filterByValue(array, string) {
  //   return array.filter((o) =>
  //     Object.keys(o).some((k) => o[k].toLowerCase().includes(string.toLowerCase()))
  //   );
  // }

  // console.log(import.meta.env.VITE_GITHUB_TOKEN);
</script>

<template>
  <main class="project">
    <section>
      <h1>Projects</h1>
      <input v-model="q" />
      <div v-if="computedList" name="list" class="grid">
        <TransitionGroup>
          <RepoItem
            v-for="(repo, index) in computedList"
            tag="repo-item"
            v-shared-element:[repo.id]
            v-shared-element:[`product-title-${repo.id}`]="{
              restrictToRoutes(to, from, id) {
                return id.includes(to.params.id);
              },
            }"
            :css="true"
            :data="repo"
            :key="repo.name"
            :to="repo.name"
            :data-index="index"
          />
        </TransitionGroup>
      </div>
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
