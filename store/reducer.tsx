import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface CategoryState {
  data: any
}

const initialState: CategoryState = {
  data: null,
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {

    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.value += 1
    },
    decrement: (state) => {
      // state.value -= 1
    },
    setCategoryList: (state, action: PayloadAction<object>) => {
      state.data = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, setCategoryList } = categorySlice.actions

export default categorySlice.reducer