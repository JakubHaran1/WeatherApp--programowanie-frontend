import { configureStore } from "@reduxjs/toolkit";
import favSlice from "./fav/favSlice";

export const store = configureStore({
  reducer: {
    fav: favSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
