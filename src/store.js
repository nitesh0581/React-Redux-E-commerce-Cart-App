import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./redux/actions/reducers/main";

const store=configureStore({
    
    reducer:{
        rootReducer,
    }
})

export default store;