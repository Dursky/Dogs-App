import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface Dog {
	id: string
	breed: string
	imageUrl: string
}

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
			console.log(action.payload)
			state.dogs.push(action.payload)
		},
		removeDog: (state, action: PayloadAction<string>) => {
			state.dogs = state.dogs.filter((dog) => dog.id !== action.payload)
		},
		updateDog: (state, action: PayloadAction<Dog>) => {
			const index = state.dogs.findIndex((dog) => dog.id === action.payload.id)
			if (index !== -1) {
				state.dogs[index] = action.payload
			}
		},
	},
})

export const {addDog, removeDog, updateDog} = dogSlice.actions
export default dogSlice.reducer
