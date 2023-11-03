import { combineReducers } from "redux";
import Slice from './Slices/HandleSlice'
const rootReducer=combineReducers({ images: Slice});
export default rootReducer;