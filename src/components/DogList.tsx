import React from "react"
import {useSelector} from "react-redux"
import {RootState} from "../store/rootReducer"
import DogTile from "./DogTile"

const DogList: React.FC = () => {
	const dogs = useSelector((state: RootState) => state.dogs.dogs)

	return (
		<div className="mt-8">
			<h2 className="text-2xl font-bold mb-4">My Dogs</h2>
			<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{dogs.map((dog) => (
					<DogTile dog={dog} key={dog.id} />
				))}
			</ul>
		</div>
	)
}

export default DogList
