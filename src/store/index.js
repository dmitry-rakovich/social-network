import { configureStore } from "@reduxjs/toolkit";
import postReducer from './postSlice'
import newsReducer from './newsSlice'
export default configureStore({
    reducer: {
        posts: postReducer, 
        news: newsReducer
    }
})