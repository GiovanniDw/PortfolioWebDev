<script setup>
import { onMounted, ref } from 'vue'
import BaseHero from '@/components/BaseHero.vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
const store = useUserStore()
const { data, username, socials, getSocial } = storeToRefs(store)

// console.log(" store" + store);

// const { username , login} = myData;
</script>

<template>
  <main>
    <BaseHero :data="data" />

    <div>
      <p v-if="data">
        Username:{{ data.login }}
        {{ data.bio }}
      </p>
    </div>
  </main>
</template>
