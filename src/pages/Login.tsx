import React from "react"
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {Formik, Form, Field, ErrorMessage} from "formik"
import {login} from "../store/authSlice"
import {LoginSchema} from "../validation"

const Login: React.FC = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleLogin = async (values: {username: string; password: string}) => {
		dispatch(login(values.username))
		navigate("/dashboard")
	}
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Log in to your account
					</h2>
				</div>
				<Formik
					initialValues={{username: "", password: ""}}
					validationSchema={LoginSchema}
					onSubmit={handleLogin}>
					<Form className="mt-8 space-y-6">
						<div className="rounded-md shadow-sm -space-y-px">
							<div>
								<Field
									name="username"
									type="text"
									required
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
									placeholder="Username"
								/>
								<ErrorMessage
									name="username"
									component="div"
									className="text-red-500 text-sm mt-1"
								/>
							</div>
							<div>
								<Field
									name="password"
									type="password"
									required
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
									placeholder="Password"
								/>
								<ErrorMessage
									name="password"
									component="div"
									className="text-red-500 text-sm mt-1"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
								Log in
							</button>
						</div>
					</Form>
				</Formik>
			</div>
		</div>
	)
}

export default Login
