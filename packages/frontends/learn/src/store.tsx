import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import pathReducer from "./app/slices/path";

export const store = configureStore({
  reducer: {
    path: pathReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
