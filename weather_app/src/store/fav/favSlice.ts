import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface FavState {
  fav: { name: string; country: string }[];
}

const initialState: FavState = {
  fav: [],
};

const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addFav: (
      state,
      action: PayloadAction<{ name: string; country: string }>
    ) => {
      state.fav = [...state.fav, action.payload];
    },
  },
});

export const { addFav } = favSlice.actions;
export default favSlice.reducer;
