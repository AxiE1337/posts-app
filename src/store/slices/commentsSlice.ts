import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Comments {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

interface InitialState {
  loading: boolean
  comments: Comments[]
}

const initialState: InitialState = {
  loading: false,
  comments: [],
}

export const counterSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setComments: (state, action: PayloadAction<Comments[]>) => {
      if (Array.isArray(action.payload)) {
        state.comments = action.payload
      }
      state.loading = false
    },
  },
})

export const {} = counterSlice.actions

export default counterSlice.reducer
