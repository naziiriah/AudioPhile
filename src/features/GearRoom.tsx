import { createSlice } from "@reduxjs/toolkit";
import Db from "../store/data.json"

const initialState = {
    value : Db
}


export const GearsFile = createSlice({
    name: "gears",
    initialState,
    reducers: {
     addToCart: () => {

     }
    }
})

export default GearsFile.reducer;
