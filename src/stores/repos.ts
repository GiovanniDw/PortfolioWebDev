import { defineStore } from 'pinia';
import { ref, computed, toRefs, watch, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { useFetch, until, useAsyncState } from '@vueuse/core';

// import { requestData } from "../services/requestData";

// export default getGithubUserData();

export const useReposStore = defineStore('repos', () => {
  const route = useRoute();
  const username = ref('GiovanniDw')
  const name = ref('Giovanni')
  const reposURL = ref(`https://api.github.com/users/${username.value}/repos`)

  const id = ref('');
  const setId = (params) => { id.value = params; }
  const project = ref({});
  const setProject = (param) => {project.value = param}
  const projects = ref([]);
  const loading = ref(false);
  console.log(route.params.id)
  
const error = ref(null)

  // console.log(import.meta.env.VITE_GITHUB_TOKEN);


//  function getRepoById() {
//     const { isFetching, error, data } = useFetch(urlDetail.value).get().json()
//     // for (const project of this.data) {
//     //   all.value.set(project.name, project)
//     // }
//     return setProject(data)
//   }

  // console.log(getAllRepos())

async function fetchProjects() {
  loading.value = true
  try {
    const { isFetching, error, data } = await useFetch(reposURL.value).get().json()
    return projects.value = data.value
  } catch (error) {
    error.value = error
    console.log(error)
  } finally {
    loading.value = false
  }
}
projects.value = fetchProjects()

async function fetchProject(id) {
  loading.value = true
  const repoURL = ref(`https://api.github.com/repos/${username.value}/${id}`)
  try {
    const { isFetching, error, data } = await useFetch(repoURL.value).get().json()
    return project.value = data.value
  } catch (error) {
    error.value = error
    console.log(error)
  } finally {
    loading.value = false
  }
}



  // setId(route.params.id)
  // const repos = ref(data.value)

  // const currentProject = computed(() => {
  //   if (!data.value || !route.params.id) {
  //     return;
  //   }
  //   console.log(data.value)
  //   console.log(id.value)
  //   return data.find(name => {
  //     console.log(name)

  //     name === id.value
  //   })
  // })


  // const projectsList = computed(() => {
  //   if (!data.value) {
  //     return;
  //   }
  //   console.log(data.value);
  //   console.log(projects.value);
  //   return data.value.filter((item) => {
  //     return item.homepage !== null;
  //   });
  // });


  return { username, name, id, setId, project,projects, loading, fetchProject }
})
