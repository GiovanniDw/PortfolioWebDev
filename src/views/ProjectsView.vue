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
  const repos = useReposStore();

  const { id, projectsList, projects, loading, error } = storeToRefs(repos);
  import RepoItem from "@/components/RepoItem.vue";

  // if (data.value) {
  //   list.value = data.value;
  // }

  // if (id.value) {
  //   console.log(id.value);
  //   projectID.value = id;
  // }

  // const computedList = computed(() => {
  //   if (!data.value) {
  //     return;
  //   }
  //   console.log(data.value);
  //   return data.value.filter((item) => {
  //     return item.homepage !== null;
  //   });
  // });
  console.log(repos.projects.value);
  // console.log(import.meta.env.VITE_GITHUB_TOKEN);
  repos.setId(routeParams);
</script>

<template>
  <section>
    <div v-if="projects" name="projects">
      <article
        v-for="project in projects"
        :key="project.name"
        v-shared-element:[project.name]
      >
        <RouterLink
          class="project"
          :to="{
            name: 'project',
            params: { id: project.name },
            props: { project },
          }"
        >
          <h3>{{ project.name }}</h3>
          <p>Size {{ project.size }}</p>
          <p>{{ project.language }}</p>
          <a :href="project.html_url">{{ project.html_url }}</a>
        </RouterLink>
      </article>
    </div>
    <article v-if="error">
      <h3>{{ error }}</h3>
    </article>
    <article v-if="loading">
      <h3>Loading</h3>
    </article>
  </section>
</template>

<style lang="scss">
  div[name="projects"] {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    gap: 1em;
  }
  article > .project,
  article.project {
    border: 1px solid var(--color-border);
    padding: var(--padding-s);
    border-radius: 1em;
    width: 100%;
    display: block;
    position: relative;
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
