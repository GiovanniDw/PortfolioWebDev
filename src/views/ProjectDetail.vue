<script setup>
  import { ref, computed } from "vue";
  import { storeToRefs } from "pinia";
  import { useReposStore } from "@/stores/repos";
  import { marked } from "marked";
  import {
    onBeforeRouteLeave,
    onBeforeRouteUpdate,
    RouterLink,
    useRoute,
  } from "vue-router";
  import { useFetch } from "@vueuse/core";
  import VueMarkdown from "vue-markdown-render";
  const route = useRoute();
  const repos = useReposStore();
  const projectMD = ref("");
  // const repo = useRepoStore();
  const { project, loading, error, id } = storeToRefs(repos);
  const props = defineProps({
    project: Object,
  });

  // const routeParams = route.params.id;
  // repos.setId(routeParams);

  // const id = parseInt(route.params.id);

  console.log(route.params.id);

  // console.log(project.value);

  // if (data.value) {
  //   list.value = data.value;
  // }

  // if (id.value) {
  //   console.log(id.value);
  //   projectID.value = id;
  // }

  // const project = repos.getRepoByName(routeParams);
  // console.log(project.value);
  // const getID = computed(() => repos);
  // console.log(getID.value);

  repos.fetchProject(route.params.id);

  // const ProjectMarkdown = computed(() => marked(projectMD.value));
</script>

<template>
  <section>
    <article class="project" v-if="project" v-shared-element:[route.params.id]>
      <img
        :src="`https://opengraph.githubassets.com/187af8fe4f0c5fdf671f74087c5ff1174cc59dff718dd0fbb10bd3c6af271c18/GiovanniDw/${project.name}`"
      />
      <h3>{{ project.name }}</h3>
      <div name="content">
        <p>Size {{ project.size }}</p>
        <p>{{ project.language }}</p>
        <a :href="project.html_url">{{ project.html_url }}</a>
      </div>
    </article>
    <article v-if="loading">
      <h3>Loading</h3>
    </article>
    <article v-if="error">
      <h3>Error</h3>
    </article>
  </section>
</template>

<style scoped lang="scss">
  article {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  h1 {
    padding-left: 1em;
    text-align: left;
  }
  .grid {
    // display: grid;
    // grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    // gap: 1em;
  }

  // .list-enter-active,
  // .list-leave-active {
  //   transition: all 0.5s ease;
  // }
  // .list-enter-from,
  // .list-leave-to {
  //   opacity: 0;
  //   transform: translateX(30px);
  // }

  article {
    overflow: hidden;
  }
</style>
