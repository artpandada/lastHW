import {createSlice} from "@reduxjs/toolkit";

export const filtersAdditionSlice = createSlice({
    name: 'filter',
    initialState: {
        spice: 1,
        nuts: true,
        vegetarian : false
    },
    reducers: {
        spaceChange: (state, value) => {
            state.spice = value.payload;
        },
        changeNuts: (state) => {
            state.nuts = !state.nuts
        },
        changeVegetarian: (state) => {
            state.vegetarian = !state.vegetarian
        }
    }
})

export const {spaceChange, changeNuts,changeVegetarian} = filtersAdditionSlice.actions;
export default filtersAdditionSlice.reducer