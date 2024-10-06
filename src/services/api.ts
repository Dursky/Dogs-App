import {useQuery} from "react-query"

const API_URL = "https://dogapi.dog/api/v2"

export const useDogRandomFact = () => {
	return useQuery("dogFacts", async () => {
		const response = await fetch(`${API_URL}/facts`)

		if (!response.ok) {
			throw new Error("Network response was not ok")
		}

		const data = await response.json()

		return data.data[0].attributes.body
	})
}
