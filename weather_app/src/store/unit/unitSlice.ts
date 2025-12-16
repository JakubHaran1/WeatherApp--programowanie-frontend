import { createSlice } from "@reduxjs/toolkit";

const loadUnit = () => {
  const data = localStorage.getItem("unit");
  if (!data) return "C";
  return JSON.parse(data);
};

interface unitState {
  unit: string;
}

const initialState: unitState = {
  unit: loadUnit(),
};

const unitSlice = createSlice({
  name: "unit",
  initialState,
  reducers: {
    changeUnit: (state: unitState) => {
      if (state.unit === "C") state.unit = "F";
      else state.unit = "C";
      localStorage.setItem("unit", JSON.stringify(state.unit));
    },
  },
});

export const { changeUnit } = unitSlice.actions;
export default unitSlice.reducer;
