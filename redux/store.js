import {configureStore} from "@reduxjs/toolkit";
import rootReducer from './rootReducer';

const store=configureStore({
    reducer:{
      images:rootReducer
    }
})
export default store;