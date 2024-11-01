/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit'

export const starshipsSlice = createSlice({
  name: 'starships',
  initialState: [],
  reducers: {
    setStarships: (_state, action) => {
      return action.payload
    }
  }
})

export default starshipsSlice.reducer
export const { setStarships } = starshipsSlice.actions