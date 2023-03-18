<script setup>
  import { RouterLink, RouterView } from "vue-router";
  import avatar from "@/assets/avatar.png";

  function beforeLeave(el) {
    console.log(el);
    const { top } = el.getBoundingClientRect();
    el.style.position = "fixed";
    el.style.top = `${top}px`;
    el.style.left = 0;
    el.style.right = 0;
    el.style.zIndex = "-1";
  }
  function afterLeave(el) {
    el.style.position = "";
    el.style.top = "";
    el.style.left = "";
    el.style.right = "";
    el.style.zIndex = "";
  }
</script>

<template>
  <header>
    <RouterLink to="/">
      <img :src="avatar" alt="Profile" />
    </RouterLink>
    <nav>
      <RouterLink to="/">{GiovanniDw}</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <!-- <RouterLink to="/about">About Me</RouterLink> -->
    </nav>
  </header>
  <main>
    <RouterView v-slot="{ Component }">
      <Transition
        @before-leave="beforeLeave"
        @after-leave="afterLeave"
        name="fade-in"
        mode="out-in"
      >
        <Component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>

<style scoped lang="scss">
  header {
    display: flex;
    line-height: 1.5;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    position: sticky;
    top: 0;
    z-index: var(--z-index-top);
    background: var(--color-background);
    /* max-height: 100vh; */
  }

  header > a {
    width: 2em;
  }

  header img {
  }

  .logo {
    display: block;
    /* margin: 0 auto 2rem; */
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 1em;
    text-align: center;
    /* margin-top: 2rem; */
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 1rem;
    /* border-left: 1px solid var(--color-border); */
  }

  nav a:first-of-type {
    border: 0;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }

    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;

      padding: 1rem 0;
      margin-top: 1rem;
    }
  }

  .fade-in {
    &-enter-active {
      transition: opacity 800ms cubic-bezier(0.55, 0, 0.1, 1);
    }

    &-enter {
      opacity: 0;
    }

    &-enter-to {
      opacity: 1;
    }
  }

  .fade-out-in {
    &-enter-active {
      transition: opacity 800ms cubic-bezier(0.55, 0, 0.1, 1);
    }

    &-leave-active {
      position: absolute;
      transition: opacity 800ms cubic-bezier(0.55, 0, 0.1, 1);
    }

    &-enter {
      opacity: 1;
    }

    &-enter-to {
      opacity: 1;
    }

    &-leave-to {
      opacity: 0;
    }
  }
</style>
