import React, {useState} from "react"
import {useDispatch} from "react-redux"
import {Dog} from "../types"
import {removeDog, updateDog} from "../store/dogSlice" // Załóżmy, że te akcje są zdefiniowane w dogSlice

interface DogTileProps {
	dog: Dog
}

const DogTile: React.FC<DogTileProps> = ({dog}) => {
	const dispatch = useDispatch()
	const [isEditing, setIsEditing] = useState(false)
	const [editedBreed, setEditedBreed] = useState(dog.breed)

	const handleEdit = () => {
		setIsEditing(true)
	}

	const handleSave = () => {
		dispatch(updateDog({id: dog.id, breed: editedBreed, fact: dog.fact}))
		setIsEditing(false)
	}

	const handleCancel = () => {
		setEditedBreed(dog.breed)
		setIsEditing(false)
	}

	const handleRemove = () => {
		dispatch(removeDog(dog.id))
	}

	return (
		<li className="bg-white shadow-md rounded-lg overflow-hidden">
			<div className="p-4">
				{isEditing ? (
					<input
						type="text"
						value={editedBreed}
						onChange={(e) => setEditedBreed(e.target.value)}
						className="w-full p-2 border rounded mb-2"
					/>
				) : (
					<p className="text-lg font-semibold mb-2">{dog.breed}</p>
				)}
				<p className="text-lg font-semibold mb-2">{dog.fact}</p>
				{isEditing ? (
					<div className="space-x-2">
						<button
							onClick={handleSave}
							className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
							Save
						</button>
						<button
							onClick={handleCancel}
							className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
							Cancel
						</button>
					</div>
				) : (
					<div className="space-x-2">
						<button
							onClick={handleEdit}
							className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
							Edit
						</button>
						<button
							onClick={handleRemove}
							className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
							Remove
						</button>
					</div>
				)}
			</div>
		</li>
	)
}

export default DogTile
