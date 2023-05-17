import { combineReducers } from "@reduxjs/toolkit";
import { modalReducer } from "./modalReducer";

const reducers = combineReducers({
    modals : modalReducer,
})