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
  // console.log(import.meta.env.VITE_GITHUB_TOKEN);
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

// const formatUserData = (data) => {
//   return data.map((d) => {
//     // const sizeScaleValue = (d) => sizeScale(sizeValue(d));
//     // const colorScaleValue = (d) => colorScale(colorValue(d));
//     // console.log(colorScaleValue);

//     return {
//       id: d.id,
//       name: d.name,
//       username: d.username,
//       bio: d.bio,
//       followers: d.followers,
//       following: d.following,
//       created_at: d.created_at,
//       updated_at: d.updated_at,
//       blog: d.blog,
//       gravatar_id: d.gravatar_id,
//       avatar_url: d.avatar_url,
//       gravatar_id: d.gravatar_id,
//       gravatar_id: d.gravatar_id,
//       color: colorScale(colorValue(d)),
//       capacitySizeScale: capacitySizeScale(sizeValue(d)),
//       // sizeScale: sizeScaleValue,
//       // colorScale: colorScaleValue,
//     };
//   });
// }
