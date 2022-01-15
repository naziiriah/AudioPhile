import { createSlice } from "@reduxjs/toolkit";
import DB from "../store/data.json"

const initialState = {
    value :DB
}

const Cart = []

export const GearsFile = createSlice({
    name: "gears",
    initialState,
    reducers: {
        addToCart: (state, {payload, type}) => {
            const Newitem  = state.value.find(state => state.id === payload.id)
            Cart.push(Newitem)
        }
    }
})

export default GearsFile.reducer;
