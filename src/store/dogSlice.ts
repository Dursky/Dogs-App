import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {Dog} from "../types"

interface DogState {
	dogs: Dog[]
}

const initialState: DogState = {
	dogs: [],
}

const dogSlice = createSlice({
	name: "dogs",
	initialState,
	reducers: {
		addDog: (state, action: PayloadAction<Dog>) => {
			state.dogs.push(action.payload)
		},
		removeDog: (state, action: PayloadAction<string>) => {
			state.dogs = state.dogs.filter((dog) => dog.id !== action.payload)
		},
		removeAllDogs: (state) => {
			state.dogs = []
		},
		updateDog: (state, action: PayloadAction<Dog>) =>
			void (state.dogs[state.dogs.findIndex((dog) => dog.id === action.payload.id)] =
				action.payload),
	},
})

export const {addDog, removeDog, updateDog, removeAllDogs} = dogSlice.actions
export default dogSlice.reducer
