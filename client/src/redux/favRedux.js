import {createSlice} from "@reduxjs/toolkit"

const favoriteSlice = createSlice({

    name: "favorites",
    initialState:{
        products:[],
    },
    reducers:{
        addFav:(state, action)=>{
            state.products.push(action.payload);
        },
    },
});

export const {addFav} = favoriteSlice.actions; 
export default favoriteSlice.reducer;