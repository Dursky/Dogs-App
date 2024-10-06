import React from "react"
import {render, screen} from "@testing-library/react"
import {Provider} from "react-redux"
import {configureStore} from "@reduxjs/toolkit"
import dogReducer, {addDog, removeDog, updateDog} from "./store/dogSlice"
import DogTile from "./components/DogTile"

test("DogTile renders dog information correctly", () => {
	const mockDog = {
		id: "1",
		breed: "Labrador",
		fact: "Loves to swim",
	}

	const store = configureStore({
		reducer: dogReducer,
		preloadedState: {dogs: [mockDog]},
	})

	render(
		<Provider store={store}>
			<DogTile dog={mockDog} />
		</Provider>,
	)

	expect(screen.getByText(mockDog.breed)).toBeInTheDocument()
	expect(screen.getByText(mockDog.fact)).toBeInTheDocument()
	expect(screen.getByText("Edit")).toBeInTheDocument()
	expect(screen.getByText("Remove")).toBeInTheDocument()
})

describe("dogSlice", () => {
	const initialState = {
		dogs: [],
	}

	test("should handle initial state", () => {
		expect(dogReducer(undefined, {type: "unknown"})).toEqual(initialState)
	})

	test("should handle addDog", () => {
		const newDog = {id: "1", breed: "Labrador", fact: "Loves to swim"}
		const actual = dogReducer(initialState, addDog(newDog))
		expect(actual.dogs).toEqual([newDog])
	})

	test("should handle removeDog", () => {
		const state = {
			dogs: [
				{id: "1", breed: "Labrador", fact: "Loves to swim"},
				{id: "2", breed: "Poodle", fact: "Very intelligent"},
			],
		}
		const actual = dogReducer(state, removeDog("1"))
		expect(actual.dogs).toEqual([{id: "2", breed: "Poodle", fact: "Very intelligent"}])
	})

	test("should handle updateDog", () => {
		const state = {
			dogs: [
				{id: "1", breed: "Labrador", fact: "Loves to swim"},
				{id: "2", breed: "Poodle", fact: "Very intelligent"},
			],
		}
		const updatedDog = {id: "1", breed: "Golden Retriever", fact: "Loves to swim"}
		const actual = dogReducer(state, updateDog(updatedDog))
		expect(actual.dogs).toEqual([
			{id: "1", breed: "Golden Retriever", fact: "Loves to swim"},
			{id: "2", breed: "Poodle", fact: "Very intelligent"},
		])
	})
})
