<script setup>
  import { onMounted } from "vue";

  defineProps({
    data: Object,
    to: String,
  });

  // const SelectedProject = computed(() => {
  //     const selectedId = +this.$route.params.id;
  // }

  // onMounted(() => {
  //   console.log(`The initial count is ${count.value}.`)
  // })
</script>

<template>
  <div class="projects">
    <article>
      <RouterLink :to="'projects/' + to.toString()">
        <h3>Name:{{ data.name }}</h3>
        <p>Size {{ data.size }}</p>
        <a :href="data.url">{{ data.url }}</a>
      </RouterLink>
    </article>
  </div>
</template>

<style lang="scss">
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
