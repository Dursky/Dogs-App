import {User} from "../types"

const mockUsers: User[] = [
	{
		username: process.env.REACT_APP_MOCK_USER_USERNAME || "",
		password: process.env.REACT_APP_MOCK_USER_PASSWORD || "",
	},
]

export const authenticateUser = (username: string, password: string): Promise<User> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const user = mockUsers.find((u) => u.username === username && u.password === password)

			if (user) {
				resolve(user)
			} else {
				reject(new Error("Invalid credentials or user does not exist"))
			}
		}, 500) // Simulating network delay
	})
}
