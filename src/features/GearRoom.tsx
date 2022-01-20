import { createSlice } from "@reduxjs/toolkit";
import DB from "../store/data"


export const Cart:any = []


const initialState = {
    value :DB, 
    
}



export const GearsFile = createSlice({
    name: "gears",
    initialState,
    reducers: {
        addToCart: (state, {payload, type}) => {
            const Newitem  = state.value.find(state => state.id === payload.id)
            Cart.find((state: { id: number; }) => state.id === payload.id) ? alert(2)
            : Cart.push(Newitem)
            
        },
        cartProduct : (state) => {
            

        }, 
        RemoveCartProducts: (state, {payload, type}) => {
           Cart.length >1 && Cart.filter((state: { id:number; }) => state.id !== payload.id)
        },

    }
})

export const {addToCart, cartProduct, RemoveCartProducts} = GearsFile.actions

export default GearsFile.reducer;
