import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const loadFav = (): FavState["fav"] => {
  const data = localStorage.getItem("fav");
  return data ? JSON.parse(data) : [];
};

interface FavState {
  fav: { name: string; country: string }[];
}

const initialState: FavState = {
  fav: loadFav(),
};

const favSlice = createSlice({
  name: "fav",

  initialState,
  reducers: {
    addFav: (
      state,
      action: PayloadAction<{ name: string; country: string }>
    ) => {
      console.log(state.fav);
      const exist = state.fav.find(
        (el) =>
          el.name == action.payload.name && el.country == action.payload.country
      );
      if (!exist) {
        state.fav.push(action.payload);
        localStorage.setItem("fav", JSON.stringify(state.fav));
      }
    },
    removeFav: (
      state,
      action: PayloadAction<{ name: string; country: string }>
    ) => {
      state.fav = state.fav.filter((el) => el.name != action.payload.name);
      localStorage.setItem("fav", JSON.stringify(state.fav));
    },
  },
});

export const { addFav, removeFav } = favSlice.actions;
export default favSlice.reducer;
