import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IPost, IUser } from '../../types'

interface InitialState {
  loading: boolean
  posts: IPost[]
  user: IUser | null
}

const initialState: InitialState = {
  loading: false,
  posts: [],
  user: null,
}

export const counterSlice = createSlice({
  name: 'user',
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
    setUser: (state, action: PayloadAction<IUser>) => {
      if (action.payload) {
        state.user = action.payload
      }
      state.loading = false
    },
  },
})

export const {} = counterSlice.actions

export default counterSlice.reducer
