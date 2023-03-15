import { Octokit } from '@octokit/rest'
import { ref } from 'vue'
import { useFetch, set } from '@vueuse/core'

export const getGithubUserData = async () => {
  const octokit = new Octokit({ auth: import.meta.env.VITE_GITHUB_TOKEN })
  const dataArray = ref([])

  try {
    const { data } = await octokit.request('/GiovanniDw')
    if (data) {
      set(dataArray, data)
    }

    return dataArray
  } catch (error) {
    console.error(error)
  }
}
