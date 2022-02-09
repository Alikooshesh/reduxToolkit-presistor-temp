import dataReducer from './dataReducer/dataReducer'
import {persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import {combineReducers} from "@reduxjs/toolkit";

const combinedReducers = combineReducers({
    data : dataReducer
})

const persistedReducers = persistReducer({key:'rootPersistor',storage,whitelist:['data']},combinedReducers)
export default persistedReducers