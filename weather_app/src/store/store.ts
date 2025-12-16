import { configureStore } from "@reduxjs/toolkit";
import favSlice from "./fav/favSlice";
import unitSlice from "./unit/unitSlice";

export const store = configureStore({
  reducer: {
    fav: favSlice,
    unit: unitSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
