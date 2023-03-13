import { Octokit } from "@octokit/core";
import { defineStore } from 'pinia'
import { computed, ref } from "vue"
import { requestData } from "../services/requestData";



// export default getGithubUserData();

export const useUserStore = defineStore('user', () => {
  const count = ref(0)
  const username = ref('GiovanniDw')
  const name = ref('Giovanni')
  const url = ref(`https://api.github.com/users/${username.value}`)
  const request = requestData(url.value)
  console.log(request)
  const data = ref(request);
  
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, username ,name , doubleCount, increment, url, data }
})