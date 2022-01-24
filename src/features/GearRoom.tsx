import { createSlice } from "@reduxjs/toolkit";
import DB from "../store/data"

interface state {
    cart: any | [];
    value : {
        id: number;
        slug: string;
        name: string;
        image: {
            mobile: string;
            tablet: string;
            desktop: string;
        };
        category: string;
        categoryImage: {
            mobile: string;
            tablet: string;
            desktop: string;
        };
        new: boolean;
        price:number;
        description:string;
        features:string;
        includes:{
            quantity:number;
            item:string;
        }[];
        gallery:{
            first:{
                mobile:string;
                tablet:string;
                desktop:string;
            };
            second:{
                mobile:string;
                tablet:string;
                desktop:string;
            },
            third:{
                mobile:string;
                tablet:string;
                desktop:string;
            }
        };
        others:{
            slug:string;
            name:string;
            image:{
                mobile:string;
                tablet:string;
                desktop:string;
            }
        }[]
        }[];
}
    

const initialState:state = {
    value :DB, 
    cart : []
}


export const GearsFile = createSlice({
    name: "gears",
    initialState,
    reducers: {
        addToCart: (state, {payload}) => {
            // takes the id gotten from the product page and finds the item from the general state and appends it in the 
            // gives it a placeholder that can be pushed into the cart.
            const newItem = state.value.find((state: { id: number; }) => state.id === payload.id)

            function checkContent(id:number ){
                //  
                const existingState =  state.cart.find((state: { id: number; }) =>state.id === id ) 
                
                // check if the item exist in the cart to prevent duplicating and just appending the values instead
                existingState? 
                    existingState.value += payload.value
                    : state.cart.push({
                                    "id": id,
                                        newItem,
                                    "value": payload.value
                                    }) 
             }
            // to push the item into the cart if the cart is empty or call the function that checks if it
            // exists in the cart already and appends the value or just if it doesn't exists, it just pushes it directly into the cart array.
            state.cart.length === 0 ? state.cart.push({
                                        "id": payload.id,
                                        newItem,
                                        "value": payload.value
                                        }) 
                                    : checkContent(payload.id)    
        },
        editCartAmount: (state, {payload}) => {
            // to edit the value or number of items that's  to be placed in the cart
            const existingItem = state.cart.find((state: { id: number; }) => state.id === payload.id)
            existingItem.value = payload.value
        }, 
        EmptyCart: (state) => {
            // to empty the cart
                    state.cart = []
        },
        removeCartItem : ( state, {payload} )=> {
        // to remove a specific item from the cart
            const id  = payload.id
             const newCart = state.cart.filter((state: { id: number; }) => state.id !== id)
             state.cart = newCart
            
        }
    }
})

export const {addToCart, editCartAmount, EmptyCart, removeCartItem } = GearsFile.actions

export default GearsFile.reducer;
