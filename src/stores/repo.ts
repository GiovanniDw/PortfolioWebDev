import { defineStore } from 'pinia';
import { ref, computed, toRefs } from 'vue';
import { useRoute } from 'vue-router';
import { useFetch, until, useAsyncState } from '@vueuse/core';

// import { requestData } from "../services/requestData";

// export default getGithubUserData();

export const useRepoStore = defineStore('repo', () => {
  const route = useRoute();
  const username = ref('GiovanniDw')
  const name = ref('Giovanni')
  const url = ref(`https://api.github.com/users/${username.value}/repos`)

  const id = ref('');
  const setId = (params) => { id.value = params; }
  
  const setProject = (param) => {project.value = param}
  const projects = ref({});
  const all = ref([])

  console.log(route.params.id)
  const urlDetail = ref(`https://api.github.com/repos/${username.value}/${route.params.name}`)


  // console.log(import.meta.env.VITE_GITHUB_TOKEN);


//  function getRepoByName(name) {
//     const { isFetching, error, data } = useFetch(urlDetail.value).get().json()
//     // for (const project of this.data) {
//     //   all.value.set(project.name, project)
//     // }
//     return data
//   }

  // console.log(getAllRepos())



  const { isFetching, error, data } = useFetch(urlDetail).get().json()



  // setId(route.params.id)
  // const repos = ref(data.value)

  const currentProject = computed(() => {
    if (!data.value || !route.params.id) {
      return;
    }
    console.log(data.value)
    console.log(id.value)
    return data.find(name => {
      console.log(name)

      name === id.value
    })
  })

  console.log(data)
  const project = computed(() => {
    if (!data.value) {
      return;
    }
    console.log(data.value);
    console.log(id.value);
    return data.value
  });


  return { username, name, url, data, project,isFetching, currentProject }
})
