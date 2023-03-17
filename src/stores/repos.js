import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useFetch } from '@vueuse/core';
// import { requestData } from "../services/requestData";

// export default getGithubUserData();

export const useReposStore = defineStore('repos', () => {
  const route = useRoute();
  const username = ref('GiovanniDw')
  const name = ref('Giovanni')
  const url = ref(`https://api.github.com/users/${username.value}/repos`)
  const id = ref('');
  const setId = () => id.value = route.params.id;


  // console.log(import.meta.env.VITE_GITHUB_TOKEN);
  const { isFetching, error, data } = useFetch(url.value).get().json()
  console.log(data)
  // const repos = ref(data.value)
  return { username, name, url, data, id  }
})
