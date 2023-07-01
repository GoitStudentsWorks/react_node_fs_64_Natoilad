import { getBackGrounds } from './background-operations';

const { createSlice } = require('@reduxjs/toolkit');

const handleIfPending = state => {
  state.isLoading = true;
};

const handleIfReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const bgSlice = createSlice({
  name: 'bg',
  initialState: {
    backgrounds: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getBackGrounds.pending, handleIfPending)
      .addCase(getBackGrounds.rejected, handleIfReject)
      .addCase(getBackGrounds.fulfilled, (state, { payload }) => {
        state.backgrounds = payload;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const bgReducer = bgSlice.reducer;
