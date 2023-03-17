<script setup>
  import {
    onBeforeRouteLeave,
    onBeforeRouteUpdate,
    RouterLink,
    useRoute,
  } from "vue-router";
  import { onMounted, computed, ref } from "vue";

  const route = useRoute();

  const projectID = route.params.id;
  const id = parseInt(route.params.id);
  // const product = products.find(id)
  const currentPath = ref(window.location.hash);

  const props = defineProps({
    data: Object,
    to: String,
  });

  const selectedProject = ref(false);

  // eslint-disable-next-line vue/return-in-computed-property
  const selectProject = computed(() => {
    const selectedID = id;
    const { data } = props;
    if (!data.value) {
      return;
    }

    data.forEach((project, index) => {
      // has access to outer scope `parentMessage`

      if (project.id === selectedProject.value) {
        return (selectedProject.value = project);
      }
      return null;

      // but `item` and `index` are only available in here
    });
    return selectedProject;
  });
  console.log(id);

  console.log(selectProject.value);

  // SelectedProject();

  // const routeMatchesSharedID = (to, _, id) => {
  //   return id.includes(to.params.id);
  // };
</script>

<template>
  <router-view :is="project" name="project">
    <article>
      <h3 v-shared-element:[route.params.id]>{{ selectProject.name }}</h3>
    </article>
  </router-view>
</template>

<style scoped lang="scss">
  div[name="projects"] {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    gap: 1em;
  }

  article {
    border: 1px solid var(--color-border);
    padding: var(--padding-s);
  }

  .page-enter-active {
    transition: opacity 150ms ease 150ms;
  }

  .page-leave-active {
    position: absolute;
    transition: opacity 150ms ease;
  }

  .page-leave-to,
  .page-enter {
    opacity: 0;
  }
</style>
