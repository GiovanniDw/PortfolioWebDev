<script setup>
  import {
    onBeforeRouteLeave,
    onBeforeRouteUpdate,
    RouterLink,
    useRoute,
  } from "vue-router";
  import { useReposStore } from "@/stores/repos";
  import { onMounted, computed, ref } from "vue";
  import { storeToRefs } from "pinia";

  const props = defineProps({
    data: Object,
    to: String,
    id: String,
  });
  const store = useReposStore();
  // const { data, setID, id } = storeToRefs(store);
  const route = useRoute();

  const { id, setID, data } = storeToRefs(store);
  // const projectID = route.params.id;
  const projectID = parseInt(route.params.id);
  // const product = products.find(id)
  // const currentPath = ref(window.location.hash);

  // console.log(routeParams);

  const selectedProject = ref({});

  // eslint-disable-next-line vue/return-in-computed-property
  const selectProject = computed(() => {
    // if (!id.value) {
    //   const selectedID = id.value;
    // }

    // const { data, id } = props;
    if (!id.value) {
      console.log(id.value);
      return false;
    } else if (!data.value) {
      return false;
    }

    data.value.forEach((project, index) => {
      // has access to outer scope `parentMessage`

      if (project.id == route.params.id) {
        console.log(`${id}+ ${route.params.id}`);
        return (selectedProject.value = project);
      }

      return;
      // but `item` and `index` are only available in here
    });
    return selectedProject.value;
  });

  // SelectedProject();

  const routeMatchesSharedID = (to, _, id) => {
    return id.includes(to.params.id);
  };

  // console.log(route.params.id);

  if (route.params.id) {
    id.value = route.params.id;
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
</script>

<template>
  <section class="projects">
    <template v-if="!id">
      <div name="projects">
        <article v-for="project in computedList" :key="project.id">
          <RouterLink
            :to="{
              name: 'project',
              params: { id: project.id },
            }"
          >
            <h3 v-shared-element:[project.id]>{{ project.name }}</h3>
            <p>Size {{ project.size }}</p>
            <p>{{ project.language }}</p>
            <a :href="project.html_url">{{ project.html_url }}</a>
          </RouterLink>
        </article>
      </div>
    </template>
    <template v-else>
      <div name="project" v-if="selectProject">
        <article :key="selectProject.id">
          <h3 v-shared-element:[route.params.id]>{{ selectProject.name }}</h3>
        </article>
      </div>
    </template>
  </section>
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
    border-radius: 1em;
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
