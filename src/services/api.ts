import {useQuery} from "react-query"

const API_URL = "https://dog-api.kinduff.com/api"

export const useRandomDog = () => {
	return useQuery("randomDog", async () => {
		const response = await fetch(`${API_URL}/breeds/image/random`)

		if (!response.ok) {
			throw new Error("Network response was not ok")
		}

		return response.json()
	})
}

export const useDogBreeds = () => {
	return useQuery("dogBreeds", async () => {
		const response = await fetch(`${API_URL}/breeds/list/all`)

		if (!response.ok) {
			throw new Error("Network response was not ok")
		}

		const data = await response.json()

		return data.message
	})
}
