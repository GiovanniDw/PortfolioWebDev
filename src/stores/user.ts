
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useFetch, set, createFetch } from '@vueuse/core'

// import { requestData } from "../services/requestData";

// export default getGithubUserData();


import { useAxios } from '@vueuse/integrations/useAxios'


export const useUserStore = defineStore('user', () => {
  const api = "https://api.github.com/"
  const username = ref('GiovanniDw')
  const name = ref('Giovanni')
  const url = ref(`https://api.github.com/users/${username.value}`)
  const socialsURL = ref(`${api}${username.value}/social_accounts`);
  
  // console.log(import.meta.env.VITE_GITHUB_TOKEN);
  // console.log(request)
  // const data = ref(request)
  const { isFetching, error, data } = useFetch(url.value).get().json()
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  
  
  



  return { username, name, url, data }
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



// const useMyFetch = createFetch({
//   baseUrl: 'https://api.github.com/',
//   options: {
//     beforeFetch({ options }) {
//       const myToken = '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'
//       options.headers.Authorization = `Bearer ${myToken}`

//       return { options }
//     },
//   },
//   fetchOptions: {
//     mode: 'cors',
//   },
// })





// function getSocial() {
//   // ✅ Read x properties in computed or actions
//   // const { isFetching, error, data } = useFetch(socialsURL.value).get().json()
//   // ...


//   const { isFetching, error, data } = useMyFetch('user/social_accounts').get().json()

//   // const data = await octokit.request('GET /user/social_accounts', {
//   //   headers: {
//   //     'X-GitHub-Api-Version': '2022-11-28'
//   //   }
//   // })







//   return data
// }