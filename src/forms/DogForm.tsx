import React from "react"
import {useDispatch} from "react-redux"
import {Formik, Form, Field, ErrorMessage} from "formik"
import {addDog} from "../store/dogSlice"
import {useRandomDog} from "../services/api"
import {DogSchema} from "../utils/validation"

const DogForm: React.FC = () => {
	const dispatch = useDispatch()
	const {refetch: fetchRandomDog} = useRandomDog()

	return (
		<div className="mt-8">
			<h2 className="text-2xl font-bold mb-4">Add a New Dog</h2>
			<Formik
				initialValues={{breed: ""}}
				validationSchema={DogSchema}
				onSubmit={async (values, {resetForm}) => {
					const {data: dogImage} = await fetchRandomDog()
					dispatch(
						addDog({
							id: Date.now().toString(),
							breed: values.breed,
							imageUrl: dogImage.message,
						}),
					)
					resetForm()
				}}>
				{({errors, touched}) => (
					<Form className="space-y-4">
						<div>
							<Field
								name="breed"
								placeholder="Dog Breed"
								className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
							<ErrorMessage name="breed" component="div" className="text-red-500 mt-1" />
						</div>
						<button
							type="submit"
							className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
							Add Dog
						</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default DogForm
