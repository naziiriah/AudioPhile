import { createSlice } from "@reduxjs/toolkit";
import DB from "../store/data"


export const Cart:any = []

function checkCart(id:number){
const existingItem =   Cart.filter((state: { id: number }) => state.id === id)

console.log(existingItem)

}


const initialState = {
    value :DB, 
    
}



export const GearsFile = createSlice({
    name: "gears",
    initialState,
    reducers: {
        addToCart: (state, {payload, type}) => {
            Cart.length === 0  ? Cart.push(state.value.find(state => state.id === payload.id)) : checkCart(payload.id)
             
        },
        cartProduct : (state) => {
            

        }, 
        RemoveCartProducts: (state, {payload, type}) => {
           Cart.length >1 && Cart.filter((state: { id:number}) => state.id !== payload.id)
        },
        UpdateCart : ( state, {payload, type} )=> {

        }

    }
})

export const {addToCart, cartProduct, RemoveCartProducts} = GearsFile.actions

export default GearsFile.reducer;
