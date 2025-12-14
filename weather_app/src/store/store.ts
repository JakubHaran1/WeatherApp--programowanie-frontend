import { configureStore } from "@reduxjs/toolkit";
import favReducer from "./fav/favSlice";

export const store = configureStore({
  reducer: {
    fav: favReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
