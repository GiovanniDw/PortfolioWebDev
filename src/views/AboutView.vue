<script setup>
import {computed} from 'vue'
import BaseHero from '@/components/BaseHero.vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
const store = useUserStore()
const { data, username } = storeToRefs(store)


const getImageUrl = computed(() => {
  return data.avatar_url
})


</script>

<template>
  <main class="about">
    <BaseHero :data='data' :title="'About'"/>
    <div v-if='store'>
    {{ data }}
</div>
<div v-if='data'>
    <img :src="getImageUrl" alt=''>
</div>
  </main>
</template>

<style lang="scss">

img {
  width: 100%;
  
}
</style>
