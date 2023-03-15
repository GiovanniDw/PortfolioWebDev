import { Octokit, App } from 'octokit'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useFetch, set } from '@vueuse/core'
// import { requestData } from "../services/requestData";

// export default getGithubUserData();

export const useUserStore = defineStore('user', () => {
  const username = ref('GiovanniDw')
  const name = ref('Giovanni')
  const url = ref(`https://api.github.com/users/${username.value}`)
  const myData = ref(null)

  // console.log(request)
  // const data = ref(request)
  const { isFetching, error, data } = useFetch(url.value).get().json()
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  set(myData, data)

  console.log(myData)
  return { username, name, url, data, myData }
})
