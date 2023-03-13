<script async setup>
import { onMounted , ref} from 'vue';
import Hero from '@/components/Hero.vue';
// import use from '../services/getGithubUserData';
// import { useUserStore } from '@/stores/user'


// const store = useUserStore();

import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia'

  const store = ref(null);

      // useUserStore();

// const props = defineProps({
//   data:useUserStore  
// })
onMounted(() => {
store.value = useUserStore()
    console.log(store.value);

});

console.log(store);

</script>

<template>
  <main>
    <Hero/>
    {{ store }}

    <!-- <div :fr> </div> -->
  </main>
</template>
