import * as Yup from "yup"

export const DogSchema = Yup.object().shape({
	breed: Yup.string().required("Breed is required"),
})

export const LoginSchema = Yup.object().shape({
	username: Yup.string().required("Username is required"),
	password: Yup.string().required("Password is required"),
})
