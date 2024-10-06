import React from "react"
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {Formik, Form, Field, FormikHelpers} from "formik"
import {login} from "../store/authSlice"
import {LoginSchema} from "../validation"
import {authenticateUser} from "../services/mockUserApi"
import {User} from "../types"

const initialValues: User = {username: "", password: ""}

const Login: React.FC = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleLogin = async (values: User, {setFieldError, setSubmitting}: FormikHelpers<User>) => {
		try {
			const {username, password} = values

			await authenticateUser(username, password)

			dispatch(login(values))
			navigate("/dashboard")
		} catch (err) {
			console.error("Something went wrong: ", err)
			setFieldError("all", (err as Error).message)
		} finally {
			setSubmitting(false)
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Log in to your account
					</h2>
				</div>
				<Formik initialValues={initialValues} validationSchema={LoginSchema} onSubmit={handleLogin}>
					{({errors, touched, isSubmitting}) => (
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
								</div>
								<div>
									<Field
										name="password"
										type="password"
										required
										className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
										placeholder="Password"
									/>
								</div>
							</div>

							{Object.values(errors).length > 0 && (
								<div className="text-red-500 text-sm mt-2">{Object.values(errors).join(", ")}</div>
							)}

							<div>
								<button
									type="submit"
									disabled={isSubmitting}
									className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50">
									{isSubmitting ? (
										<svg
											className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24">
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"></circle>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
										</svg>
									) : null}
									{isSubmitting ? "Logging in..." : "Log in"}
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	)
}

export default Login
