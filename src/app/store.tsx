import { configureStore } from "@reduxjs/toolkit";
import  GearReducer  from "../features/GearRoom";


export const store = configureStore({
    reducer : {
        gears : GearReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.getState   