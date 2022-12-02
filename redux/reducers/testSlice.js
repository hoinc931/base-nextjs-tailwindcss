import { createSlice } from '@reduxjs/toolkit';

export const testSlice = createSlice({
  name: 'testSlice',
  initialState: {
    name: 'hello ahihi'
  },
  reducers: {
    changeName: (state, { payload }) => ({ ...state, name: payload }),
  },
});

export const { changeName } = testSlice.actions;

export default testSlice.reducer;
