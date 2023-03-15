export const requestData = async (url) => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}
