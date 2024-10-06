import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {logout} from "../store/authSlice"
import {RootState} from "../store/rootReducer"

const Header: React.FC = () => {
	const dispatch = useDispatch()
	const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

	return (
		<header className="bg-blue-500 p-4">
			<div className="container mx-auto flex justify-between items-center">
				<h1 className="text-white text-2xl font-bold">Dog App</h1>
				<nav>
					{isAuthenticated ? (
						<button
							onClick={() => dispatch(logout())}
							className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
							Logout
						</button>
					) : (
						<Link to="/login" className="text-white hover:underline">
							Login
						</Link>
					)}
				</nav>
			</div>
		</header>
	)
}

export default Header
