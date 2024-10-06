import {combineReducers} from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import dogReducer from "./dogSlice"

const rootReducer = combineReducers({
	auth: authReducer,
	dogs: dogReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
