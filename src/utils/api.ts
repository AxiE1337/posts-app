import axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com'

const wait = (value: number = 1000) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(value)
    }, value)
  })

export const fetchPosts = async () => {
  await wait()
  const { data } = await axios(baseUrl + '/posts')
  return data
}

export const fetchUserPosts = async (uId: number) => {
  await wait()
  const { data } = await axios(baseUrl + `/posts?userId=${uId}`)
  return data
}

export const fetchComments = async (postId: number) => {
  await wait()
  const { data } = await axios(baseUrl + `/comments?postId=${postId}`)
  return data
}
