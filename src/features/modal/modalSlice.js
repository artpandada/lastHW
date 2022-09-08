import {createSlice} from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        window: false,
        modalIcon : false,
        modalIconCount: 0,
        modalIconPrice :0,
        dishesDelivery: []
    },
    reducers : {
        modalChange: (state) => {
            state.window = !state.window
        },

        addCount : (state) => {
            state.modalIconCount += 1
            if(state.modalIconCount > 0){
                state.modalIcon = true;
            }
         },
        addPrice : (state, price) => {
            state.modalIconPrice += price.payload
        },
        addDishesDelivery : (state,dishes) => {
            state.dishesDelivery.push({...dishes.payload, count:1})
        },
        // addCount : (state,id) => {
        //     state.dishesDelivery.map(el => {
        //         if(el.id == id.payload){
        //             el.
        //         }
        //     })
        // }
    }
})

export const {modalChange, addCount,addPrice, addDishesDelivery} = modalSlice.actions;
export default modalSlice.reducer