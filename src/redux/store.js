import { createStore, combineReducers, applyMiddleware  } from "redux";
import galleryReducer from "./galleryReducer";
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    gallery: galleryReducer,
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
