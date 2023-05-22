import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IPost } from '../../types'

interface InitialState {
  loading: boolean
  posts: IPost[]
  userPosts: IPost[]
}

const initialState: InitialState = {
  loading: false,
  posts: [],
  userPosts: [],
}

export const counterSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setPosts: (state, action: PayloadAction<IPost[]>) => {
      if (Array.isArray(action.payload)) {
        state.posts = action.payload
      }
      state.loading = false
    },
    setUserPosts: (state, action: PayloadAction<IPost[]>) => {
      if (Array.isArray(action.payload)) {
        state.userPosts = action.payload
      }
      state.loading = false
    },
  },
})

export const {} = counterSlice.actions

export default counterSlice.reducer
