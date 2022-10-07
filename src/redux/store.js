import { configureStore } from "@reduxjs/toolkit";
import zoomReducer from "./reducer";

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = configureStore({
    reducer: {
        zoom: zoomReducer,
    },
    reduxDevtools
});