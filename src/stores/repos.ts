import { defineStore } from 'pinia'
import {  ref } from 'vue'
import { useFetch } from '@vueuse/core'
// import { requestData } from "../services/requestData";

// export default getGithubUserData();




export const useReposStore = defineStore('repos', () => {
  
  const username = ref('GiovanniDw')
  const name = ref('Giovanni')
  const url = ref(`https://api.github.com/users/${username.value}/repos`)
  
  const { isFetching, error, data } = useFetch(url.value).get().json()
  console.log(data.value)
  // const repos = ref(data.value)
  return { username, name, url, data}
})
