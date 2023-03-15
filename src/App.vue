<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">{GiovanniDw}</RouterLink>
    <nav>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/about">About Me</RouterLink>
    </nav>
  </header>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style scoped>
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
/* 
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
} */
</style>
