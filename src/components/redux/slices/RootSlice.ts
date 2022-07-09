import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {

    make: "Make",
    model: "Model",
    sale_price: "Sale_price",
    color: "Color",
    year: " Year",
    new_used: "New_used",

  },
  reducers: {
    chooseMake: (state, action) => {
      state.make = action.payload;
    },
    chooseModel: (state, action) => {
      state.model = action.payload;
    },
    chooseSale_price: (state, action) => {
      state.sale_price = action.payload;
    },
    chooseColor: (state, action) => {
      state.color = action.payload;
    },
    chooseYear: (state, action) => {
      state.year = action.payload;
    },
    chooseNew_used: (state, action) => {
      state.new_used = action.payload;
    },
  },
});

export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, chooseSale_price, chooseColor, chooseYear, chooseNew_used,
} = rootSlice.actions;