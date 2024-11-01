/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

const initialState = null

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_state, action) => {
      return action.payload
    },
    unsetUser: () => {
      return initialState
    }
  }
})

export default userSlice.reducer
export const { setUser, unsetUser } = userSlice.actions