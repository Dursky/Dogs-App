import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {RootState} from "../store/rootReducer"
import {removeDog} from "../store/dogSlice"

const DogList: React.FC = () => {
	const dogs = useSelector((state: RootState) => state.dogs.dogs)
	const dispatch = useDispatch()

	return (
		<div className="mt-8">
			<h2 className="text-2xl font-bold mb-4">My Dogs</h2>
			<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{dogs.map((dog) => (
					<li key={dog.id} className="bg-white shadow-md rounded-lg overflow-hidden">
						<img src={dog.imageUrl} alt={dog.breed} className="w-full h-48 object-cover" />
						<div className="p-4">
							<p className="text-lg font-semibold">{dog.breed}</p>
							<button
								onClick={() => dispatch(removeDog(dog.id))}
								className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
								Remove
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default DogList
