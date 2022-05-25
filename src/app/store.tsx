import { configureStore } from "@reduxjs/toolkit";
import  GearReducer  from "../features/GearRoom";
import authReducer from "../features/auth/authSlice"


export const store = configureStore({
    reducer : {
        gears : GearReducer,
        auth: authReducer,
        
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.getState   