import React from "react"
import DogList from "../components/DogList"
import DogForm from "../forms/DogForm"

const Dashboard: React.FC = () => {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8">Dashboard</h1>
			<DogForm />
			<DogList />
		</div>
	)
}

export default Dashboard
