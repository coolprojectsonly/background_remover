import { createSlice } from "@reduxjs/toolkit";
import { getImage } from "./action";

const initialState = {
  status: "idle",
  data: {},
  error: null,
};

const createReducer = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getImage.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(getImage.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
    builder.addCase(getImage.rejected, (state) => {
      state.status = "error";
      state.error = "error";
    });
  },
});

export default createReducer;
