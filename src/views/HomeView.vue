<script setup>
import { onMounted, ref } from "vue";
import BaseHero from "@/components/BaseHero.vue";
// import use from '../services/getGithubUserData';
import { useUserStore } from "@/stores/user";

// const store = useUserStore();

// import { useUserStore } from '@/stores/user';
import { storeToRefs } from "pinia";

const store = useUserStore();

// useUserStore();

// const props = defineProps({
//   data:useUserStore
// })
// onMounted(() => {
//   store.value = useUserStore()
//   console.log('hi')
//   console.log(store.value)
// })

console.log(" store" + store);

const { data, username } = storeToRefs(store);

// const { username , login} = myData;

console.log(data.avatar_url);
</script>

<template>
  <main>
    <BaseHero v-if="data" :title="data.login" />
    <div v-if="username">
      {{ username }}
      <p>
        {{ data.name }}
        {{ data.bio }}
      </p>
    </div>
  </main>
</template>
