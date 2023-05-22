import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

interface InitialState {
  loading: boolean
  posts: Post[]
}

const initialState: InitialState = {
  loading: false,
  posts: [],
}

export const counterSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setPosts: (state, action: PayloadAction<Post[]>) => {
      if (Array.isArray(action.payload)) {
        state.posts = action.payload
      }
      state.loading = false
    },
  },
})

export const { setPosts } = counterSlice.actions

export default counterSlice.reducer
