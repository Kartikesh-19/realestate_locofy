import { createSlice } from '@reduxjs/toolkit';

const initialState={
    images:[],
}

const HandleSlice=createSlice({
    name:'data',
    initialState,
    reducers:{
        setImages:(state,action)=>{
            state.images=action.payload
        }

    }
})
export const { setImages ,images} = HandleSlice.actions;
export default HandleSlice.reducer;