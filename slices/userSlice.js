import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    deleteToken: (state) => {
      state.token = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { setToken, deleteToken } = userSlice.actions

export default userSlice.reducer