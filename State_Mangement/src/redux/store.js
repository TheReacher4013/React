import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducer";

const store = configureStore({
    reducer: countReducer,
});

export default store;