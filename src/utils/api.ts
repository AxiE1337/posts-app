const baseUrl = 'https://jsonplaceholder.typicode.com'

const wait = (value: number = 1000) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(value)
    }, value)
  })

export const fetchPosts = async () => {
  await wait()
  const res = await fetch(baseUrl + '/posts')
  return await res.json()
}

export const fetchComments = async (postId: number) => {
  const wait = (value: number = 1000) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(value)
      }, value)
    })
  await wait()
  const res = await fetch(baseUrl + `/comments?postId=${postId}`)
  return await res.json()
}
