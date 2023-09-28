import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartRedux"
import favoritesReducer from "./favRedux"

 const store = configureStore({
    reducer:{
        cart:cartReducer,
        favorites:favoritesReducer,

    },
})

export default store