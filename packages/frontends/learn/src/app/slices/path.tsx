/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { RootState } from "../../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PathState {
  value: string;
}

const initialState: PathState = {
  value: "Home"
};

export const pathSlice = createSlice({
  initialState,
  name: "path",
  reducers: {
    setPathName: (state, action: PayloadAction<string>) => {
      if (action.payload.includes("/auth")) {
        state.value = "Auth";
      } else if (action.payload.includes("/examples")) {
        state.value = "Examples";
      } else if (action.payload.includes("/home")) {
        state.value = "Home";
      }
    }
  }
});

export const { setPathName } = pathSlice.actions;

export const getPath = (state: RootState) => state.path.value;

export default pathSlice.reducer;
