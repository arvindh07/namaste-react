import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: {}
    },
    reducers: {
        addItems: (state, action) => {
            const copyState = { ...state.items };
            const key = action.payload.id;
            if (action.payload["id"] in copyState) {
                copyState[key]["quantity"] = copyState[key]["quantity"] + 1
            } else {
                let formObj = { ...action.payload, quantity: 1 };
                copyState[key] = formObj;
            }
            console.log("fin state", copyState);
            state.items = copyState; 
        },
        reduceItems: (state, action) => {
            const copyState = { ...state.items };
            const key = action.payload.id;
            if (action.payload["id"] in copyState) {
                copyState[key]["quantity"] = copyState[key]["quantity"] - 1
                if(copyState[key]["quantity"] === 0){
                    delete copyState[key];
                }
            }
            state.items = copyState;
        },
        clearCart: (state) => {
            state.items = []
        },
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;